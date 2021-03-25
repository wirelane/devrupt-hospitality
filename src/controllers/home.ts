import { Request, Response } from 'express';
import { ReservationService } from '../services/reservation-service';
import { FolioService } from '../services/folio-service';
import { PoiService } from '../services/poi-service';

interface Hotel {
  title: string,
  identifier: string,
  termsAndConditionsUrl: string,
  dataPrivacyUrl: string
}

interface ChargingPoint {
  evseId: string,
  hotel: Hotel
}

export interface Charge {
  folioId: string,
  amount: number,
  currency: string,
  subject: string
}

export interface Allowance {
  chargeId: string,
  folioId: string,
  amount: number,
  currency: string,
  subject: string
}

export interface Tariff {
  name: string,
  reservationAmount: number,
  pricePerKwh: number,
  currency: string,
}

export interface ChargingSession {
  id: string,
  duration: number,
  price: number,
  currency: string,
  kWh: number
}

const wirelane: Hotel = {
  title: 'Wirelane',
  identifier: 'wirelane',
  termsAndConditionsUrl: 'https://www.wirelane.com/de/nutzungsbedingungen/',
  dataPrivacyUrl: 'https://www.wirelane.com/datenschutzerklaerung/'
}

const wirelane_staging: Hotel = {
  title: 'Wirelane (Staging)',
  identifier: 'wirelane',
  termsAndConditionsUrl: 'https://www.wirelane.com/de/nutzungsbedingungen/',
  dataPrivacyUrl: 'https://www.wirelane.com/datenschutzerklaerung/'
}

const maseven: Hotel = {
  title: 'MASEVEN',
  identifier: 'maseven',
  termsAndConditionsUrl: 'https://www.maseven.de/wp-content/uploads/2020/10/terms_of_conditions-1.pdf',
  dataPrivacyUrl: 'https://www.maseven.de/en/privacy-policy/'
}

const maseven1: ChargingPoint = {
  evseId: 'DE*WLN*E0004457',
  hotel: maseven
}

const maseven2: ChargingPoint = {
  evseId: 'DE*WLN*E12345678',
  hotel: maseven
}

const wirelane1: ChargingPoint = {
  evseId: 'DE*WLN*E0123456',
  hotel: wirelane
}

const wirelane2: ChargingPoint = {
  evseId: 'DELNDE000210',
  hotel: wirelane_staging
}

const chargingPoints: { [key: string]: ChargingPoint } = {
  'DE*WLN*E0004457': maseven1, // production
  'DE*WLN*E0123456': wirelane1, // production
  'DEWLNE84064999': wirelane2, // staging
  'DE*WLN*E12345678': maseven2 //staging
}

const demoTariff: Tariff = {
  name: 'Hotel Charging',
  reservationAmount: 50,
  pricePerKwh: 0.38,
  currency: 'EUR'
}

const demoChargingSession: ChargingSession = {
  id: 'a22bd0eb',
  duration: 150,
  price: 10.45,
  currency: 'EUR',
  kWh: 27.5
}

export const indexEvseId = (req: Request, res: Response) => {
  res.render('index.pug', { listing: chargingPoints });
};

export const showEvseId = async (req: Request, res: Response) => {
  const evseId = req.params.evseId;
  console.log('Retrieve details for EVSEID', evseId);

  const chargingPoint = chargingPoints[evseId];

  const poiService = new PoiService();
  const poiInformation = await poiService.getPoiInformation('DEWLN', evseId);

  if (!poiInformation) {
    return res.json({
      error: `ChargePoint ${evseId} not found.`,
    });
  }

  res.render('template.pug', {
    tenant: chargingPoint.hotel,
    tariff: demoTariff,
    poi: poiInformation,
  });
};

export const startCharging = async (req: Request, res: Response) => {
  const evseId = req.params.evseId;
  const bookingNumber = req.body.bookingNumber?.toUpperCase();
  const acceptedConditions = req.body.acceptedConditions;

  if (!bookingNumber) {
    return res.status(400).json({
      error: 'Please enter your booking number.',
    });
  }

  if (!acceptedConditions) {
    return res.status(400).json({
      error: 'You need to accept the conditions to continue.',
    });
  }

  // 1. Find reservation
  const reservationService = new ReservationService();
  const reservation = await reservationService.getReservationByBookingNumber(bookingNumber);

  if (!reservation) {
    return res.status(404).json({
      error: `The entered booking number ${bookingNumber} could not be found.`,
    });
  }

  // 2. Start session
  // TODO

  // 3. Put charge on folio (later in different action)
  const folioService = new FolioService();
  const folios = await folioService.getFoliosByReservationIds([reservation.id]);
  const folio = folios.folios[0];

  const charge = await folioService.postChargeToFolio({
    folioId: folio.id,
    amount: demoTariff.reservationAmount,
    currency: demoTariff.currency,
    subject: `Wirelane Charging Session ${demoChargingSession.id} at ${evseId} on 2021-03-25 at 2.37 pm - Tariff: €${demoTariff.pricePerKwh}/kWh`,
  });

  res.json({
    reservationId: reservation.id,
    folioId: folio.id,
    chargeId: charge.id,
    chargingSession: demoChargingSession,
  });
};

export const stopCharging = async (req: Request, res: Response) => {
  const evseId = req.params.evseId;
  const bookingNumber = req.body.bookingNumber;
  const chargeId = req.body.chargeId;
  const folioId = req.body.folioId;
  const chargingSessionId = req.body.chargingSessionId;

  if (!bookingNumber || !chargeId || !folioId || !chargingSessionId) {
    return res.status(400).json({
      error: 'Invalid data provided.',
    });
  }

  // 1. Find reservation
  const reservationService = new ReservationService();
  const reservation = await reservationService.getReservationByBookingNumber(bookingNumber);

  if (!reservation) {
    return res.status(404).json({
      error: `The entered booking number ${bookingNumber} could not be found.`,
    });
  }

  const folioService = new FolioService();
  const allowance = await folioService.postAllowanceToFolioAndCharge({
    chargeId: chargeId,
    folioId: folioId,
    amount: demoTariff.reservationAmount - demoChargingSession.price,
    currency: demoTariff.currency,
    subject: `Wirelane Charging Session ${demoChargingSession.id} at ${evseId} on 2021-03-25 at 2.37 pm - Ended on 2021-03-25 at 5.07 pm - ${demoChargingSession.kWh} kWh * €${demoTariff.pricePerKwh} = ${demoChargingSession.price}`,
  });

  res.json({
    allowanceId: allowance.id,
    chargingSession: demoChargingSession,
  });
};
