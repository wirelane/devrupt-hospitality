# Wirelane Devrupt Hospitality
Wirelane <-> Apaleo integration for the [devrupt hospitality hackathon](https://www.devrupt-hospitality.com/).

## Business Case
As a hotel owner, I want my guests to be able to charge their electric vehicles (EV) regardless of any membership with electric mobility providers (EMP) or direct payment options. Guests should be able pay for the charging service together with the hotel invoice.

With the Wirelane <-> Apaleo integration, the guest can initiate a charging session by scanning the QR code at the charging station and providing the booking reference.

The hotel invoice then lists all charging sessions together with all other services consumed during the stay.

A demo will be provided via video.

## Technical Solution
Node.js server connecting both the Apaleo API and the Wirelane API

### Requirements
- Docker

### Setup
1. Use the `.env.example` file to fill in all necessary information to `.env`.

### Start
1. Execute `docker-compose up` to start the server.

### Deployment
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)