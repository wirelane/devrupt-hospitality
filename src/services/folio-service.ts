import {
  ApaleoFinanceAPI,
  FolioListModel,
  CreateChargeModel,
  AddedChargeModel,
  CreateAllowanceForChargeModel,
  CreatedSubResourceIdModel
} from '../../clients/apaleo/finance/client';
import { ApaleoOauth } from '../../clients/apaleo/apaleo-oauth';
import config from '../config';

export class FolioService {
  private readonly apiClient = new ApaleoFinanceAPI(
    new ApaleoOauth(),
    config.APALEO_BASE_URL
  );

  public async getFoliosByReservationIds(reservationIds: [string]): Promise<FolioListModel> {
    try {
      const result = await this.apiClient.financeFoliosGet({
        reservationIds: reservationIds
      });

      console.log('getFoliosByReservationId', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('getFoliosByReservationId', error);
    }
  }

  public async postChargeToFolio(folioId: string, charge: string): Promise<AddedChargeModel> { // charge -> Charge
    const createChargeModel: CreateChargeModel = {
      serviceType: 'Other',
      vatType: 'Normal',
      name: charge,
      amount: {
        amount: 50,
        currency: 'EUR'
      },
      //receipt?: string;
      quantity: 1
    }

    try {
      const result = await this.apiClient.financeFolioActionsByFolioIdChargesPost(folioId, createChargeModel);

      console.log('postChargeToFolio', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('postChargeToFolio', error);
    }
  }

  public async postAllowanceToFolioAndCharge(folioId: string, chargeId: string, reason: string, amount: number): Promise<CreatedSubResourceIdModel> {
    const createAllowanceForChargeModel: CreateAllowanceForChargeModel = {
      reason: reason,
      amount: {
        amount: amount,
        currency: 'EUR'
      }
    }

    try {
      const result = await this.apiClient.financeFolioActionsByFolioIdChargesByChargeIdAllowancesPost(folioId, chargeId, createAllowanceForChargeModel);

      console.log('postAllowanceToFolioByCharge', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('postAllowanceToFolioByCharge', error);
    }
  }
}
