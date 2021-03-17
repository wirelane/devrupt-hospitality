import { Request, Response } from 'express';

interface Hotel {
  title: string,
  identifier: string,
  termsAndConditionsUrl: string,
  dataPrivacyUrl: string,
  phone: string
}
const hotelConfiguration: { [key: string]: Hotel} = {
  "wirelane": {
    title: 'Wirelane',
    identifier: 'wirelane',
    termsAndConditionsUrl: 'https://www.wirelane.com/de/nutzungsbedingungen/',
    dataPrivacyUrl: 'https://www.wirelane.com/datenschutzerklaerung/',
    phone: '+49 800 399 499 599'
  },
  "maseven": {
    title: 'MASEVEN',
    identifier: 'maseven',
    termsAndConditionsUrl: 'https://www.maseven.de/wp-content/uploads/2020/10/terms_of_conditions-1.pdf',
    dataPrivacyUrl: 'https://www.maseven.de/en/privacy-policy/',
    phone: '+49 89 998 29 44 0'
  }
};

// TODO: select Hotel configuration based on EVSEID.
export const showHotel = (req: Request, res: Response) => {
  res.render('template.pug', hotelConfiguration[req.params.id])
};
