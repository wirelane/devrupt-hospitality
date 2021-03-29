import {
  ChargingPoint,
  WirelaneAPI,
} from '../../../clients/wirelane/client';
import config from '../../config';
import { WirelaneOauth } from '../../../clients/wirelane/wirelane-oauth';

export class SessionService {
  private readonly apiClient = new WirelaneAPI(
    new WirelaneOauth(),
    config.WIRELANE_BASE_URL
  );

  // initiates a remote start for the CP at evseid
  public async startSession(evseid: string): Promise<any> {
    // todo: mock
  }

  public async stopSession(evseid: string): Promise<any> {
    // todo: mock
  }
}
