import fs from 'fs';
const jwt = require('jsonwebtoken');
import config from '../config';

export class MapKit {
  public getJwt() {
    const header = {
      "alg": "ES256",
      "typ": "JWT",
      "kid": "HUN98Z8M25",
    };
  
    const payload = {
      "iss": "6T4DA45VJE",
      "iat": Date.now() / 1000,
      "exp": (Date.now() / 1000) + 15778800,
      "origin": "https://192.168.178.54:8888",
    };

    if (!fs.existsSync(config.MAPKIT_CERT_FILE)) {
      return null;
    }
  
    var cert = fs.readFileSync(config.MAPKIT_CERT_FILE);
    return jwt.sign(payload, cert, { header: header } );
  }
}
