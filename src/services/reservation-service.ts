import {
  ApaleoBookingAPI,
  ReservationModel,
  ReservationItemModel,
} from '../../clients/apaleo/booking/client';
import { ApaleoOauth } from './apaleo-oauth';
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

  public async getReservationByUnitName(unitName: string): Promise<ReservationItemModel> {
    try {
      const unitService = new UnitService();
      const unit = await unitService.getUnitByName(unitName);
      const result = await this.apiClient.bookingReservationsGet({
        unitIds: [unit.id],
        propertyIds: [config.APALEO_PROPERTY_ID],
        status: ['Confirmed', 'InHouse']
      });

      console.log('getReservationByUnitId', result._response.parsedBody);

      return result._response.parsedBody.reservations.shift();
    } catch (error) {
      console.log('getReservationByUnitId', error);
    }
  }
}
