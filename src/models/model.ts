export interface Hotel {
  title: string,
  identifier: string,
  termsAndConditionsUrl: string,
  dataPrivacyUrl: string
}

export interface ChargingPoint {
  evseId: string,
  hotel: Hotel
}

export interface Charge {
  folioId: string,
  amount: number,
  currency: string,
  subject: string
}

export interface Allowance {
  chargeId: string,
  folioId: string,
  amount: number,
  currency: string,
  subject: string
}

export interface Tariff {
  name: string,
  reservationAmount: number,
  pricePerKwh: number,
  currency: string,
}

export interface ChargingSession {
  id: string,
  duration: number,
  price: number,
  currency: string,
  kWh: number
}