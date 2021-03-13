import {
  ApaleoBookingAPI,
  ReservationModel,
} from '../../clients/apaleo/booking/client';
import { ApaleoOauth } from './apaleo-oauth';
import config from '../config';

export class ReservationService {
  private readonly apiClient = new ApaleoBookingAPI(
    new ApaleoOauth(),
    config.APALEO_BASE_URL
  );

  public async getReservationById(id: string): Promise<ReservationModel> {
    try {
      const result = await this.apiClient.bookingReservationsByIdGet(id);

      return result._response.parsedBody;
    } catch (error) {
      console.log(error);
    }
  }
}
