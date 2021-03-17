import { Request, Response } from 'express';

interface Hotel {
  title: string,
  identifier: string,
  termsAndConditionsUrl: string,
  dataPrivacyUrl: string,
  phone: string,
  price: string
}

const hotelConfiguration: { [key: string]: Hotel} = {
  'wirelane': {
    title: 'Wirelane',
    identifier: 'wirelane',
    termsAndConditionsUrl: 'https://www.wirelane.com/de/nutzungsbedingungen/',
    dataPrivacyUrl: 'https://www.wirelane.com/datenschutzerklaerung/',
    phone: '+49 800 399 499 599',
    price: '0.38'
  },
  'maseven': {
    title: 'MASEVEN',
    identifier: 'maseven',
    termsAndConditionsUrl: 'https://www.maseven.de/wp-content/uploads/2020/10/terms_of_conditions-1.pdf',
    dataPrivacyUrl: 'https://www.maseven.de/en/privacy-policy/',
    phone: '+49 89 998 29 44 0',
    price: '0.43'
  }
};

const evseToHotelMapping: { [key: string]: string } = {
  'DE*WLN*E0004457': 'maseven',
  'DE*WLN*E0123456': 'wirelane'
}

export const indexEvseId = (req: Request, res: Response) => {
  res.render('index.pug', { listing: evseToHotelMapping });
};

export const showEvseId = (req: Request, res: Response) => {
  let evseId = req.params.evseId;
  console.log('Retrieve details for EVSEID ' + evseId);

  let hotelIdentifier = evseToHotelMapping[evseId];
  console.log('Found hotel ' + hotelIdentifier);

  let configuration = hotelConfiguration[hotelIdentifier];

  res.render('template.pug', configuration);
};
