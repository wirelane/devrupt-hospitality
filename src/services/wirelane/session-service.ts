import {
  ChargingPoint,
  WirelaneAPI,
} from '../../../clients/wirelane/client';
import config from '../../config';
import { WirelaneOauth } from '../../../clients/wirelane/wirelane-oauth';
import { ChargingSession } from '../../models/model';
import { demoChargingSession } from '../../data/data';

export class SessionService {
  private readonly apiClient = new WirelaneAPI(
    new WirelaneOauth(),
    config.WIRELANE_BASE_URL
  );

  // initiates a remote start for the CP at evseid
  public async startSession(evseid: string): Promise<ChargingSession> {
    return new Promise((resolve, reject) => {
      // Mocked Response
      resolve(demoChargingSession);
    });
  }

  public async stopSession(sessionId: string): Promise<ChargingSession> {
    return new Promise((resolve, reject) => {
      // Mocked Response
      resolve(demoChargingSession);
    });
  }
}
