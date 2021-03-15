import { Request, Response } from 'express';
const viewWirelane = require('../views/wirelane.html');
const viewMaseven = require('../views/maseven.html');

export const indexWirelane = (req: Request, res: Response) => {
  res.send(viewWirelane.default)
};

export const indexMaseven = (req: Request, res: Response) => {
  res.send(viewMaseven.default)
};
