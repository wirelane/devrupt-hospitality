import fs from 'fs';
const jwt = require('jsonwebtoken');
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

    if (!fs.existsSync(config.MAPKIT_CERT_FILE)) {
      return null;
    }
  
    var cert = fs.readFileSync(config.MAPKIT_CERT_FILE);
    return jwt.sign(payload, cert, { header: header } );
  }
}
