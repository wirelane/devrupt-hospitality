import fs from 'fs';
import jwt from 'jsonwebtoken';
import config from '../config';

export class MapKit {
  public getJwt() {
    const header = {
      "alg": "ES256",
      "typ": "JWT",
      "kid": config.MAPKIT_KEY_ID,
    };
  
    const payload = {
      "iss": config.MAPKIT_TEAM_ID,
      "iat": Date.now() / 1000,
      "exp": (Date.now() / 1000) + 15778800,
      "origin": config.MAPKIT_ORIGIN,
    };

    return jwt.sign(payload, config.MAPKIT_CERT_CONTENT, { header: header } );
  }
}
