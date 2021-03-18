import { Request, Response } from 'express';
import { ReservationService } from '../services/reservation-service';

interface Hotel {
  title: string,
  identifier: string,
  termsAndConditionsUrl: string,
  dataPrivacyUrl: string,
  phone: string
}

interface ChargingPoint {
  evseId: string,
  price: number,
  latitude: number,
  longitude: number,
  hotel: Hotel
}

const wirelane: Hotel = {
  title: 'Wirelane',
  identifier: 'wirelane',
  termsAndConditionsUrl: 'https://www.wirelane.com/de/nutzungsbedingungen/',
  dataPrivacyUrl: 'https://www.wirelane.com/datenschutzerklaerung/',
  phone: '+49 800 399 499 599'
}

const maseven: Hotel = {
  title: 'MASEVEN',
  identifier: 'maseven',
  termsAndConditionsUrl: 'https://www.maseven.de/wp-content/uploads/2020/10/terms_of_conditions-1.pdf',
  dataPrivacyUrl: 'https://www.maseven.de/en/privacy-policy/',
  phone: '+49 89 998 29 44 0'
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

const chargingPoints: { [key: string]: ChargingPoint } = {
  'DE*WLN*E0004457': maseven1,
  'DE*WLN*E0123456': wirelane1
}

export const indexEvseId = (req: Request, res: Response) => {
  res.render('index.pug', { listing: chargingPoints });
};

export const showEvseId = (req: Request, res: Response) => {
  const evseId = req.params.evseId;
  console.log('Retrieve details for EVSEID ' + evseId);

  const chargingPoint = chargingPoints[evseId];

  res.render('template.pug', {chargingPoint: chargingPoint});
};

export const startCharging = async (req: Request, res: Response) => {
  const evseId = req.params.evseId;
  const bookingNumber = req.body.bookingNumber;
  const acceptedConditions = req.body.acceptedConditions;

  // 1. Find reservation
  const reservationService = new ReservationService();
  const reservation = await reservationService.getReservationsByBookingNumber(bookingNumber);
  console.log('**** Reservation ****\n', reservation);

  // 2. Start session

  // 3. Put charge on folio (later in different action)
  const folioService = new FolioService();
  res.json(reservation);
};
