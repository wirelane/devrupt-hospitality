import {
  ApaleoBookingAPI,
  ReservationItemModel,
  ReservationListModel,
} from '../../../clients/apaleo/booking/client';
import { ApaleoOauth } from '../../../clients/apaleo/apaleo-oauth';
import config from '../../config';

export class ReservationService {
  private readonly apiClient = new ApaleoBookingAPI(
    new ApaleoOauth(),
    config.APALEO_BASE_URL
  );

  public async getReservationsByBookingNumber(bookingNumber: string): Promise<ReservationListModel> {
    console.log('getReservationsByBookingNumber', bookingNumber);

    try {
      console.log('getReservationsByBookingNumber: trying bookingId');

      // TODO: check for date
      var result = await this.apiClient.bookingReservationsGet({
        propertyIds: [config.APALEO_PROPERTY_ID],
        status: ['Confirmed', 'InHouse'],
        bookingId: bookingNumber
      });

      if (result._response.status == 200) {
        console.log('getReservationsByBookingNumber', result._response.parsedBody);
        return result._response.parsedBody;
      } else {
        console.log('getReservationsByBookingNumber: trying externalSearch');

        // TODO: check for date
        result = await this.apiClient.bookingReservationsGet({
          propertyIds: [config.APALEO_PROPERTY_ID],
          status: ['Confirmed', 'InHouse'],
          externalCode: bookingNumber
        });

        if (result._response.status == 200 && result._response.parsedBody.reservations[0].externalCode == bookingNumber) {
          console.log("codes match");
          console.log('getReservationsByBookingNumber', result._response.parsedBody);
          return result._response.parsedBody;
        } else {
          console.log("nice try ;)");
        }
      }
    } catch (error) {
      console.log('getReservationsByBookingNumber', error);
    }
  }

  public async getReservationByBookingNumber(bookingNumber: string): Promise<ReservationItemModel> {
    console.log('getReservationByBookingNumber ' + bookingNumber);

    const result = await this.getReservationsByBookingNumber(bookingNumber);

    if (!result || !result.reservations) {
      return undefined;
    }

    const reservation = result.reservations.shift();

    console.log('getReservationsByBookingNumber', reservation);

    return reservation;
  }
}
