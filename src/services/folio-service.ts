import {
  ApaleoFinanceAPI,
  FolioModel,
  FolioListModel,
  ChargeModel,
  CreateChargeModel,
  AddedChargeModel,
  CreateAllowanceForChargeModel,
  CreatedSubResourceIdModel
} from '../../clients/apaleo/finance/client';
import {
  Charge,
  Allowance
} from '../controllers/home'; // ouch, import from controller :(
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

  public async postChargeToFolio(charge: Charge): Promise<AddedChargeModel> { // charge -> Charge
    const createChargeModel: CreateChargeModel = {
      serviceType: 'Other',
      vatType: 'Normal',
      name: charge.subject,
      amount: {
        amount: charge.amount,
        currency: charge.currency
      },
      //receipt?: string;
      quantity: 1
    }

    try {
      const result = await this.apiClient.financeFolioActionsByFolioIdChargesPost(charge.folioId, createChargeModel);

      console.log('postChargeToFolio', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('postChargeToFolio', error);
    }
  }

  public async postAllowanceToFolioAndCharge(allowance: Allowance): Promise<CreatedSubResourceIdModel> {
    const createAllowanceForChargeModel: CreateAllowanceForChargeModel = {
      reason: allowance.subject,
      amount: {
        amount: allowance.amount,
        currency: allowance.currency
      }
    }

    try {
      const result = await this.apiClient.financeFolioActionsByFolioIdChargesByChargeIdAllowancesPost(allowance.folioId, allowance.chargeId, createAllowanceForChargeModel);

      console.log('postAllowanceToFolioByCharge', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('postAllowanceToFolioByCharge', error);
    }
  }
}
