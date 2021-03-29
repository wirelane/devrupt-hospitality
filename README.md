# Wirelane Devrupt Hospitality <img align="right" src="https://github.com/wirelane/devrupt-hospitality/raw/main/public/images/logo-20.png">
Wirelane <-> Apaleo integration for the [devrupt hospitality hackathon](https://www.devrupt-hospitality.com/).

## Business Case
As a hotel owner, I want my guests to be able to charge their electric vehicles (EV) regardless of any membership with electric mobility providers (EMP) or direct payment options. Guests should be able pay for the charging service together with the hotel invoice.

With the Wirelane <-> Apaleo integration, the guest can initiate a charging session by scanning the QR code at the charging station and providing the booking reference.

The hotel invoice then lists all charging sessions together with all other services consumed during the stay.

A demo will be provided via video.

## Technical Solution
Node.js server connecting both the Apaleo API and the Wirelane API.

### Development

#### Requirements
- Docker

#### Setup
Copy the `.env.example` to `.env` and fill in all the required information.

#### Run
Execute `docker-compose up` to start the server.

### Deployment

#### Requirements
- Docker or Node.js 14.x

#### Heroku
You can deploy this project directly to Heroku with the following button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

### Used Apaleo APIs

* Booking API: For booking number based authentication.
* Finance API: For looking up matching folio and to post the charges to the users invoice.
* Inventory API: For looking up matching room numbers. (not in use right now)

### Used Wirelane APIs

* Organizations Charge Points API: For getting live data about the charging point status.
