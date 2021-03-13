import axios from 'axios';
import * as qs from 'querystring';
import { AccessToken, TokenCredential } from '@azure/core-http';
import config from '../config';

export class ApaleoOauth implements TokenCredential {
  private readonly httpClient = axios.create();

  public async getToken(): Promise<AccessToken | null> {
    if (!config.APALEO_CLIENT_ID || !config.APALEO_CLIENT_SECRET) {
      throw new Error('Apaleo client ID or secret missing');
    }

    const now = new Date();

    const response = await this.httpClient.post(
      `${config.APALEO_IDENTITY_URL}/connect/token`,
      qs.stringify({
        grant_type: 'client_credentials',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: config.APALEO_CLIENT_ID,
          password: config.APALEO_CLIENT_SECRET,
        },
      }
    );

    return {
      token: response.data.access_token,
      expiresOnTimestamp: now.getTime() + response.data.expires_in * 1000,
    };
  }
}
