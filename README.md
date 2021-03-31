# Wirelane DEVrupt Hospitality <img align="right" src="https://github.com/wirelane/devrupt-hospitality/raw/main/public/images/logo-20.png">

[Wirelane](https://www.wirelane.com/) <-> [Apaleo](https://apaleo.com/) integration for the [DEVrupt Hospitality hackathon](https://www.devrupt-hospitality.com/).

## Business Case

As a hotel owner, I want my guests to be able to charge their electric vehicles (EV) regardless of any membership with electric mobility providers (EMP) or direct payment options. Guests should be able to pay for the charging service together with the hotel invoice.

With the Wirelane <-> Apaleo integration, the guest can initiate a charging session by scanning the QR code at the charging station and providing the booking reference.

The hotel invoice then lists all charging sessions together with all other services consumed during the stay.

### Videos

In order to introduce the problem and the solution, we recorded a [pitch](https://wirelane-my.sharepoint.com/:v:/p/chris_blaettermann/ESzkZfLDzuhJhDiTc1_WwjYBzl8EL6iE3mNQGtbmh9CFcg?e=kRaV1h) and a [demo](https://wirelane-my.sharepoint.com/:v:/p/chris_blaettermann/EWxuK35pr1xMgtCwSY5b85QB4gRnoh3A7p9mQy4IJNXULA?e=ot7vhS). The password can be retrieved from [Chris Blättermann](https://github.com/chrblabla).

[![Demo Video](https://github.com/wirelane/devrupt-hospitality/raw/main/public/images/video.png)](https://wirelane-my.sharepoint.com/:v:/p/chris_blaettermann/EWxuK35pr1xMgtCwSY5b85QB4gRnoh3A7p9mQy4IJNXULA?e=ot7vhS).

### Demonstration

A working demonstration can be found under [https://wirelane-devrupt-hospitality.herokuapp.com](https://wirelane-devrupt-hospitality.herokuapp.com). Alternatively, the following QR code can be scanned and it directs to one of the charging stations within the demo. A valid booking number is `UZLKTPQB`.

![QR Code](https://github.com/wirelane/devrupt-hospitality/raw/main/public/images/qr.png)

## Technical Solution

As basis for this solution, the [apaleo/node-boilerplate](https://github.com/apaleo/node-boilerplate) is being used.  Here, the Apaleo API and the Wirelane API are being connected in order to realize the use case described above. 

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
- Redis

#### Heroku
You can deploy this project directly to Heroku with the following button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

### Used Apaleo APIs

* Booking API: For booking number based authentication.
* Finance API: For looking up matching folio and to post the charges to the users invoice.

### Used Wirelane APIs

* Organizations Charge Points API: For getting live data about the charging point status.

## Contributors
* Andreas Grundler
* [Bastian Konetzny](https://github.com/bkonetzny)
* [Chris Blättermann](https://github.com/chrblabla)
