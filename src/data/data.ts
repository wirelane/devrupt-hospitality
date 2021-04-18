import {
  ChargingSession,
  Hotel,
  HotelChargingPoint,
  Tariff
} from "../models/model"
import { ChargingPoint } from '../../clients/wirelane/client';
import { v4 as uuidv4 } from "uuid";

const wirelane: Hotel = {
  title: 'Wirelane',
  identifier: 'wirelane',
  termsAndConditionsUrl: 'https://www.wirelane.com/de/nutzungsbedingungen/',
  dataPrivacyUrl: 'https://www.wirelane.com/datenschutzerklaerung/'
}

const wirelane_staging: Hotel = {
  title: 'Wirelane (Staging)',
  identifier: 'wirelane',
  termsAndConditionsUrl: 'https://www.wirelane.com/de/nutzungsbedingungen/',
  dataPrivacyUrl: 'https://www.wirelane.com/datenschutzerklaerung/'
}

const maseven: Hotel = {
  title: 'MASEVEN',
  identifier: 'maseven',
  termsAndConditionsUrl: 'https://www.maseven.de/wp-content/uploads/2020/10/terms_of_conditions-1.pdf',
  dataPrivacyUrl: 'https://www.maseven.de/en/privacy-policy/'
}

const landhausandeduen: Hotel = {
  title: 'Landhaus an de Dün',
  identifier: 'landhausandeduen',
  termsAndConditionsUrl: 'https://www.hotel-landhaus.de/agb.html',
  dataPrivacyUrl: 'https://www.hotel-landhaus.de/datenschutz.html'
}

const abasto: Hotel = {
  title: 'Abasto',
  identifier: 'abasto',
  termsAndConditionsUrl: 'https://www.abasto-feldmoching.de/wp-content/uploads/2020/09/Abasto_Feldmoching_AGBs.pdf',
  dataPrivacyUrl: 'https://www.abasto-feldmoching.de/en/privacy-policy/'
}

const landhausandeduen1: HotelChargingPoint = {
  evseid: 'DEWLNE84064999',
  hotel: landhausandeduen,
  latitude: 54.311130,
  longitude: 8.612515,
  chargePointId: 'landhausandeduen1'
}

const maseven1: HotelChargingPoint = {
  evseid: 'DE*WLN*E0004457',
  hotel: maseven,
  latitude: 48.134417,
  longitude: 11.665716,
  chargePointId: 'maseven1'
}

const wirelane1: HotelChargingPoint = {
  evseid: 'DE*WLN*E0123456',
  hotel: wirelane,
  latitude: 48.145074,
  longitude: 11.582432,
  chargePointId: 'wirelane1'
}

const abasto1: HotelChargingPoint = {
  evseid: 'DE*WLN*E1234567',
  hotel: abasto,
  latitude: 48.214175, 
  longitude: 11.540730,
  chargePointId: 'abasto1'
}

export const hotelChargingPoints: Array<HotelChargingPoint> = [
  landhausandeduen1,
  maseven1,
  wirelane1,
  abasto1
]
//
// const maseven1: ChargingPoint = {
//   evseid: 'DE*WLN*E0004457',
//   hotel: maseven
// }
//
// const maseven2: ChargingPoint = {
//   evseid: 'DE*WLN*E12345678',
//   hotel: maseven
// }
//
// const wirelane1: ChargingPoint = {
//   evseid: 'DE*WLN*E0123456',
//   hotel: wirelane
// }
//
// const wirelane2: ChargingPoint = {
//   evseid: 'DELNDE000210',
//   hotel: wirelane_staging
// }
//
// const landhausandeduen1: ChargingPoint = {
//   evseid: 'DEWLNE84064999',
//   latitude: 54.311130,
//   longitude: 8.612515
// }


export const demoTariff: Tariff = {
  name: 'Hotel Charging',
  reservationAmount: 50,
  pricePerKwh: 0.38,
  currency: 'EUR'
}

export const demoChargingSession: ChargingSession = {
  id: uuidv4(),
  duration: 150,
  price: 10.45,
  currency: 'EUR',
  kWh: 27.5
}
