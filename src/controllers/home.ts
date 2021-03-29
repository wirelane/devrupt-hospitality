import { Request, Response } from 'express';
import { FolioService } from '../services/apaleo/folio-service';
import { PoiService } from '../services/wirelane/poi-service';
import { ReservationService } from '../services/apaleo/reservation-service';
import { SessionService } from '../services/wirelane/session-service';

import {
  chargingPoints,
  demoTariff
} from '../data/data';

/**
 * @route GET /
 */
export const indexEvseId = (req: Request, res: Response) => {
  res.render('index.pug', { listing: chargingPoints });
};

/**
 * @route GET /evseid/:evseid
 */
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

/**
 * @route POST /evseid/:evseid/start
 */
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
  const sessionService = new SessionService();
  const demoChargingSession = await sessionService.startSession(evseId);
  // TODO save session to db with status pending

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

/**
 * @route POST /evseid/:evseid/stop
 */
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

  // 2. Stop charging session
  const sessionId = 'a22bd0eb';
  const sessionService = new SessionService();
  const demoChargingSession = await sessionService.stopSession(sessionId);
  
  // 3. Put allowance onto folio 
  const folioService = new FolioService();
  const allowance = await folioService.postAllowanceToFolioAndCharge({
    chargeId: chargeId,
    folioId: folioId,
    amount: demoTariff.reservationAmount - demoChargingSession.price,
    currency: demoTariff.currency,
    subject: `Wirelane Charging Session ${demoChargingSession.id} at ${evseId} on 2021-03-25 at 2.37 pm - Ended on 2021-03-25 at 5.07 pm - ${demoChargingSession.kWh} kWh * €${demoTariff.pricePerKwh} = €${demoChargingSession.price}`,
  });

  res.json({
    allowanceId: allowance.id,
    chargingSession: demoChargingSession,
  });
};
