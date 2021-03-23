import { Request, Response } from 'express';
import { MapKit } from '../services/mapkit';

/**
 * @route GET /services/mapkit/jwt
 */
export const getJwt = async (req: Request, res: Response) => {
  const mapkit = new MapKit();

  res.json({token: mapkit.getJwt()});
};
