import { Request, Response } from 'express';
const home = require('../views/wirelane.html');

/**
 * Home page.
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
  res.send(home.default)
};
