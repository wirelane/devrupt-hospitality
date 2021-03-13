import {
  ApaleoInventoryAPI,
  UnitItemModel,
  UnitListModel,
} from '../../clients/apaleo/inventory/client';
import { ApaleoOauth } from './apaleo-oauth';
import config from '../config';

export class UnitService {
  private readonly apiClient = new ApaleoInventoryAPI(
    new ApaleoOauth(),
    config.APALEO_BASE_URL
  );

  public async getUnits(): Promise<UnitListModel> {
    try {
      const result = await this.apiClient.inventoryUnitsGet({
        propertyId: config.APALEO_PROPERTY_ID,
      });

      console.log('getUnits', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('getUnits', error);
    }
  }

  public async getUnitByName(name: string): Promise<UnitItemModel> {
    try {
      const result = await this.getUnits();

      const matchingUnit = result.units.find((unit: UnitItemModel) => {
        return unit.name === name;
      });

      console.log('getUnitByName', matchingUnit);

      return matchingUnit;
    } catch (error) {
      console.log('getUnitByName', error);
    }
  }
}
