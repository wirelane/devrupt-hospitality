import express from 'express';
import compression from 'compression';

// Controllers
import * as homeController from './controllers/home';
import * as reservationsController from './controllers/reservations';
import * as servicesController from './controllers/services';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'pug');

// Routes
app.get('/hotel/:id', homeController.showHotel);
app.get('/reservations/:id', reservationsController.getReservationById);
app.get('/reservation/unit/:name', reservationsController.getReservationByUnitName);
app.get('/services/mapkit/jwt', servicesController.getJwt);

export default app;
