import { Request, Response } from 'express';
import { ReservationService } from '../services/reservation-service';

/**
 * Get reservation by id
 * @route GET /reservations/:id
 */
export const getReservationById = async (req: Request, res: Response) => {
  const service = new ReservationService();
  const reservation = await service.getReservationById(req.params.id);

  console.log('**** Reservation ****\n', reservation);

  res.json(reservation);
};

export const getReservationByUnitName = async (req: Request, res: Response) => {
  const service = new ReservationService();
  const reservation = await service.getReservationByUnitName(req.params.name);

  console.log('**** Reservation ****\n', reservation);

  res.json(reservation);
};
