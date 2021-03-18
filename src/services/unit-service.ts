import {
  ApaleoInventoryAPI,
  UnitItemModel,
  UnitListModel,
} from '../../clients/apaleo/inventory/client';
import { ApaleoOauth } from '../../clients/apaleo/apaleo-oauth';
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

      const unitDirectMatch = result.units.find((unit: UnitItemModel) => {
        return unit.name.toLowerCase() === name.toLowerCase();
      });

      if (unitDirectMatch) {
        console.log('getUnitByName - direct match', unitDirectMatch);

        return unitDirectMatch;
      }

      const unitBestMatch = result.units.find((unit: UnitItemModel) => {
        return UnitService.normalizeUnitName(unit.name) === UnitService.normalizeUnitName(name);
      });

      if (unitBestMatch) {
        console.log('getUnitByName - best match', unitBestMatch);

        return unitBestMatch;
      }

      return undefined;
    } catch (error) {
      console.log('getUnitByName', error);
    }
  }

  public static normalizeUnitName(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/gi, '');
  }
}
