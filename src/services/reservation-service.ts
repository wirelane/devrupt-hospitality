import {
  ApaleoBookingAPI,
  ReservationModel,
  ReservationItemModel,
  ReservationListModel,
} from '../../clients/apaleo/booking/client';
import { ApaleoOauth } from '../../clients/apaleo/apaleo-oauth';
import config from '../config';
import { UnitService } from './unit-service';

export class ReservationService {
  private readonly apiClient = new ApaleoBookingAPI(
    new ApaleoOauth(),
    config.APALEO_BASE_URL
  );

  public async getReservationById(id: string): Promise<ReservationModel> {
    try {
      const result = await this.apiClient.bookingReservationsByIdGet(id);

      console.log('getReservationById', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('getReservationById', error);
    }
  }

  public async getReservationsByUnitName(unitName: string): Promise<ReservationListModel> {
    try {
      const unitService = new UnitService();
      const unit = await unitService.getUnitByName(unitName);
      const result = await this.apiClient.bookingReservationsGet({
        unitIds: [unit.id],
        propertyIds: [config.APALEO_PROPERTY_ID],
        status: ['Confirmed', 'InHouse']
      });

      console.log('getReservationsByUnitName', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('getReservationsByUnitName', error);
    }
  }

  public async getReservationByUnitName(unitName: string): Promise<ReservationItemModel> {
    try {
      const reservations = await this.getReservationsByUnitName(unitName);

      // check if there is a InHouse reservation
      const reservationInHouse = reservations.reservations.find((reservation: ReservationItemModel) => {
        return reservation.status === 'InHouse';
      });

      if (reservationInHouse) {
        console.log('getReservationByUnitName - InHouse', reservationInHouse);

        return reservationInHouse;
      }

      const today = new Date();

      // check if there is a Confirmed reservation starting today
      const reservationConfirmedStartingToday = reservations.reservations.find((reservation: ReservationItemModel) => {
        return (
          reservation.status === 'Confirmed'
          /*&& reservation.arrival.getFullYear() === today.getFullYear()
          && reservation.arrival.getMonth() === today.getMonth()
          && reservation.arrival.getDay() === today.getDay()*/
        );
      });

      if (reservationConfirmedStartingToday) {
        console.log('getReservationByUnitName - Confirmed today', reservationConfirmedStartingToday);

        return reservationConfirmedStartingToday;
      }

      return undefined;
    } catch (error) {
      console.log('getReservationByUnitName', error);
    }
  }
}
