import { Request, Response } from 'express';
import { PoiService } from '../services/poi-service';

interface Hotel {
  title: string,
  identifier: string,
  termsAndConditionsUrl: string,
  dataPrivacyUrl: string,
  price: string
}

const hotelConfiguration: { [key: string]: Hotel} = {
  'wirelane': {
    title: 'Wirelane',
    identifier: 'wirelane',
    termsAndConditionsUrl: 'https://www.wirelane.com/de/nutzungsbedingungen/',
    dataPrivacyUrl: 'https://www.wirelane.com/datenschutzerklaerung/',
    price: '0.38'
  },
  'maseven': {
    title: 'MASEVEN',
    identifier: 'maseven',
    termsAndConditionsUrl: 'https://www.maseven.de/wp-content/uploads/2020/10/terms_of_conditions-1.pdf',
    dataPrivacyUrl: 'https://www.maseven.de/en/privacy-policy/',
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

export const showEvseId = async (req: Request, res: Response) => {
  const evseId = req.params.evseId;
  console.log('Retrieve details for EVSEID ' + evseId);

  const poiService = new PoiService();
  const poiInformation = await poiService.getPoiInformation('DEWLN', evseId);

  let hotelIdentifier = evseToHotelMapping[evseId];

  if (!hotelIdentifier) {
    hotelIdentifier = 'wirelane';
  }

  console.log('Found hotel ' + hotelIdentifier);

  const configuration = hotelConfiguration[hotelIdentifier];

  res.render('template.pug', {
    hotel: configuration,
    poi: poiInformation,
  });
};
