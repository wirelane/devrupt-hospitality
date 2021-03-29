import { WirelaneAPI } from '../../../clients/wirelane/client';
import config from '../../config';
import { WirelaneOauth } from '../../../clients/wirelane/wirelane-oauth';
import { ChargingSession } from '../../models/model'; // later to be imported from the Wirelane API client
import { demoChargingSession } from '../../data/data';
import { v4 as uuidv4 } from "uuid";

export class SessionService {
  private readonly apiClient = new WirelaneAPI(
    new WirelaneOauth(),
    config.WIRELANE_BASE_URL
  );

  public startSession(evseid: string): Promise<ChargingSession> {
    // TODO: use Wirelane API client to start the session
    return new Promise((resolve, reject) => {
      // Mocked Response
      // This part of the Wirelane API is not yet public.
      const chargingSession = demoChargingSession;
      chargingSession.id = uuidv4();
      resolve(chargingSession);
    });
  }

  public stopSession(sessionId: string): Promise<ChargingSession> {
    // TODO: use Wirelane API client to stop the session
    return new Promise((resolve, reject) => {
      // Mocked Response
      // This part of the Wirelane API is not yet public.
      const chargingSession = demoChargingSession;
      chargingSession.id = sessionId;
      resolve(chargingSession);
    });
  }
}
