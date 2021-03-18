import {
  ApaleoFinanceAPI,
  FolioModel,
  FolioItemModel,
  FolioListModel,
} from '../../clients/apaleo/folio/client';
import { ApaleoOauth } from './apaleo-oauth';
import config from '../config';

export class FolioService {
  private readonly apiClient = new ApaleoBookingAPI(
    new ApaleoOauth(),
    config.APALEO_BASE_URL
  );

  public async getFoliosByReservationId(reservationId: string): Promise<FolioListModel> {
    try {
      const result = await this.apiClient.financeFoliosGet({
        reservationId: reservationId
      });

      console.log('getFoliosByReservationId', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('getFoliosByReservationId', error);
    }
  }

  public async postChargeToFolio(folioId: string, charge: string): Promise<FolioListModel> { // charge -> Charge, FolioListModel -> charge?

  }
}
