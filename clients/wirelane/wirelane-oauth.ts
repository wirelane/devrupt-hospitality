import axios from 'axios';
import * as qs from 'querystring';
import { AccessToken, TokenCredential } from '@azure/core-http';
import config from '../../src/config';

export class WirelaneOauth implements TokenCredential {
  private readonly httpClient = axios.create();

  public async getToken(): Promise<AccessToken | null> {
    if (!config.WIRELANE_CLIENT_ID || !config.WIRELANE_CLIENT_SECRET) {
      throw new Error('Wirelane client ID or secret missing');
    }

    const now = new Date();

    const response = await this.httpClient.post(
      `${config.WIRELANE_IDENTITY_URL}/token`,
      qs.stringify({
        grant_type: 'password',
        client_id: config.WIRELANE_CLIENT_ID,
        client_secret: config.WIRELANE_CLIENT_SECRET,
        username: config.WIRELANE_CLIENT_USERNAME,
        password: config.WIRELANE_CLIENT_PASSWORD,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return {
      token: response.data.access_token,
      expiresOnTimestamp: now.getTime() + response.data.expires_in * 1000,
    };
  }
}
