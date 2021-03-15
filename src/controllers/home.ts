import { Request, Response } from 'express';

interface Hotel {
  title: string,
  identifier: string
}
const hotelConfiguration: { [key: string]: Hotel} = {
  "wirelane": {
    title: 'Wirelane',
    identifier: 'wirelane'
  },
  "maseven": {
    title: 'MASEVEN',
    identifier: 'maseven'
  }
};

// TODO: select Hotel configuration based on EVSEID.
export const showHotel = (req: Request, res: Response) => {
  res.render('template.pug', hotelConfiguration[req.params.id])
};
