import { Request, Response } from 'express';
import { FolioService } from '../services/apaleo/folio-service';
import { PoiService } from '../services/wirelane/poi-service';
import { ReservationService } from '../services/apaleo/reservation-service';
import { SessionService } from '../services/wirelane/session-service';
import { RedisService } from '../services/redis-service';
import {
  hotelChargingPoints,
  demoTariff,
  demoChargingSession
} from '../data/data';
import { __ } from 'i18n';

/**
 * @route GET /
 */
export const indexEvseId = async (req: Request, res: Response) => {
  res.render('index.pug', { listing: hotelChargingPoints });
};

/**
 * @route GET /evseid/:evseid
 */
export const showEvseId = async (req: Request, res: Response) => {
  const evseid = req.params.evseId;
  console.log('Retrieve details for EVSEID', evseid);

  const poiService = new PoiService();
  //const chargingPoint = await poiService.getPoiInformation('DEWLN', evseid);
  const chargingPoint = poiService.getLocalPoiInformation(evseid, hotelChargingPoints);

  if (!chargingPoint) {
    return res.json({
      error: `ChargePoint ${evseid} not found.`,
    });
  }

  //const template = 'template.' + req.getLocale() + '.pug'

  res.render('evse.pug', {
    tenant: chargingPoint.hotel,
    tariff: demoTariff,
    poi: chargingPoint,
    bookingNumber: '',
    chargingSession: demoChargingSession
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
      error: __('BOOKINGNUMBERREQUIRED'),
    });
  }

  if (!acceptedConditions) {
    return res.status(400).json({
      error: __('TACREQUIRED'),
    });
  }

  // 1. Find reservation
  const reservationService = new ReservationService();
  const reservation = await reservationService.getReservationByBookingNumber(bookingNumber);

  if (!reservation) {
    return res.status(404).json({
      error: __('BOOKINGNUMBERNOTFOUND', { bookingNumber: bookingNumber }),
    });
  }

  // 2. Start session
  const sessionService = new SessionService();
  const chargingSession = await sessionService.startSession(evseId);

  // 3. Save session in association with booking number (used for pending states later on)
  const redisService = new RedisService();
  redisService.set(reservation.bookingId, chargingSession.id);

  // 4. Put charge on folio (in different action later on)
  const folioService = new FolioService();
  const folios = await folioService.getFoliosByReservationIds([reservation.id]);
  const folio = folios.folios[0];

  const charge = await folioService.postChargeToFolio({
    folioId: folio.id,
    amount: demoTariff.reservationAmount,
    currency: demoTariff.currency,
    //subject: `Wirelane Charging Session ${chargingSession.id} at ${evseId} on 2021-03-25 at 2.37 pm - Tariff: €${demoTariff.pricePerKwh}/kWh`,
    subject: `Wirelane Charging Session: ${chargingSession.kWh} kWh * €${demoTariff.pricePerKwh} – wrln.de/${chargingSession.id.substring(0, 8)}`
  });

  res.json({
    reservationId: reservation.id,
    folioId: folio.id,
    chargeId: charge.id,
    chargingSession: chargingSession,
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
      error: __('BOOKINGNUMBERNOTFOUND', { bookingNumber: bookingNumber }),
    });
  }

  // 2. Validate session ID
  const redisService = new RedisService()
  const savedChargingSessionId = await redisService.get(bookingNumber);

  if (chargingSessionId != savedChargingSessionId) {
    return res.status(400).json({
      error: `The provided charging session id ${chargingSessionId} is invalid.`,
    });
  }

  // 3. Stop charging session
  const sessionService = new SessionService()
  const chargingSession = await sessionService.stopSession(chargingSessionId);

  redisService.del(bookingNumber);

  // 4. Put allowance onto folio
  const folioService = new FolioService();
  const allowance = await folioService.postAllowanceToFolioAndCharge({
    chargeId: chargeId,
    folioId: folioId,
    amount: demoTariff.reservationAmount - chargingSession.price,
    currency: demoTariff.currency,
    subject: `Wirelane Charging Session ${chargingSession.id} at ${evseId} on 2021-03-25 at 2.37 pm - Ended on 2021-03-25 at 5.07 pm - ${chargingSession.kWh} kWh * €${demoTariff.pricePerKwh} = €${chargingSession.price}`,
  });

  res.json({
    allowanceId: allowance.id,
    chargingSession: chargingSession,
  });
};
