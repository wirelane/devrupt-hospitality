import {
  ChargingPoint,
  WirelaneAPI,
} from '../../../clients/wirelane/client';
import config from '../../config';
import { WirelaneOauth } from '../../../clients/wirelane/wirelane-oauth';
import { HotelChargingPoint } from '../../models/model';

export class PoiService {
  private readonly apiClient = new WirelaneAPI(
    new WirelaneOauth(),
    config.WIRELANE_BASE_URL
  );

  public async getPoiInformation(tenant: string, evseid: string): Promise<ChargingPoint> {
    try {
      const result = await this.apiClient.organizationFindChargingPoint(tenant, 'evseid', evseid);

      console.log('getPoiInformation', result._response.parsedBody);

      return result._response.parsedBody;
    } catch (error) {
      console.log('getPoiInformation', error);
    }
  }

  public getLocalPoiInformation(evseid: string, hotelChargingPoints: Array<HotelChargingPoint>): HotelChargingPoint {
    for (let chargingPoint of hotelChargingPoints) {
      if (chargingPoint.evseid == evseid) {
        return chargingPoint;
      }
    }
  }
}
