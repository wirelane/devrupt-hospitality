import { 
  ChargingPoint,
  ChargingSession,
  Hotel,
  Tariff
} from "../models/model"
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

const maseven1: ChargingPoint = {
  evseId: 'DE*WLN*E0004457',
  hotel: maseven
}

const maseven2: ChargingPoint = {
  evseId: 'DE*WLN*E12345678',
  hotel: maseven
}

const wirelane1: ChargingPoint = {
  evseId: 'DE*WLN*E0123456',
  hotel: wirelane
}

const wirelane2: ChargingPoint = {
  evseId: 'DELNDE000210',
  hotel: wirelane_staging
}

export const chargingPoints: { [key: string]: ChargingPoint } = {
  'DE*WLN*E0004457': maseven1, // production
  'DE*WLN*E0123456': wirelane1, // production
  'DEWLNE84064999': wirelane2, // staging
  'DE*WLN*E12345678': maseven2 // staging
}

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