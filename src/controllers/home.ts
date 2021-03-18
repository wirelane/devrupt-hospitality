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
  price: number,
  latitude: number,
  longitude: number,
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
  price: 0.43,
  latitude: 48.134420,
  longitude: 11.665720,
  hotel: maseven
}

const wirelane1: ChargingPoint = {
  evseId: 'DE*WLN*E0123456',
  price: 0.38,
  latitude: 48.145074,
  longitude: 11.582432,
  hotel: wirelane
}

const wirelane2: ChargingPoint = {
  evseId: 'DELNDE000210',
  price: 0.38,
  latitude: 48.145074,
  longitude: 11.582432,
  hotel: wirelane_staging
}

const chargingPoints: { [key: string]: ChargingPoint } = {
  'DE*WLN*E0004457': maseven1, // production
  'DE*WLN*E0123456': wirelane1, // production
  'DELNDE000210': wirelane2, // staging
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
    tariff: {
      price: chargingPoint.price,
    },
    poi: poiInformation,
  });
};

export const startCharging = async (req: Request, res: Response) => {
  const evseId = req.params.evseId;
  const bookingNumber = req.body.bookingNumber;
  const acceptedConditions = req.body.acceptedConditions;

  // 1. Find reservation
  const reservationService = new ReservationService();
  const reservation = await reservationService.getReservationByBookingNumber(bookingNumber);
  console.log('**** Reservation ****\n', reservation);

  if (!reservation) {
    return res.json({
      error: `Reservation ${bookingNumber} not found.`,
    });
  }

  // 2. Start session
  // TODO

  // 3. Put charge on folio (later in different action)
  const folioService = new FolioService();
  const folios = await folioService.getFoliosByReservationIds([reservation.id]);
  const folio = folios.folios[0];
  console.log('**** Folios ****\n', folio);

  const newCharge = {
    folioId: folio.id,
    amount: 50,
    currency: 'EUR',
    subject: 'Wirelane Charging Session 123456 @ ' + evseId + ' Reservation'
  };
  const charge = await folioService.postChargeToFolio(newCharge);
  console.log('**** Charge ****\n', charge);

  // 4. Put allowance on folio (later in different action)
  const newAllowance = {
    chargeId: charge.id,
    folioId: folio.id,
    amount: 50 - 12.80,
    currency: 'EUR',
    subject: 'Wirelane Charging Session 123456 @ ' + evseId + ' Final Amount'
  };
  const allowance = await folioService.postAllowanceToFolioAndCharge(newAllowance);
  console.log('**** Allowance ****\n', allowance);

  res.json(reservation);
};

export const stopCharging = async (req: Request, res: Response) => {
  
  res.send('ok');
};
