import express from 'express';
import compression from 'compression';

// Controllers
import * as homeController from './controllers/home';
import * as servicesController from './controllers/services';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', 'src/views');
app.set('view engine', 'pug');

app.use(compression());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
// User Interface
app.get('/', homeController.indexEvseId);
app.get('/evseid/:evseId', homeController.showEvseId);

// Callbacks
app.post('/evseid/:evseId/start', homeController.startCharging);
app.post('/evseid/:evseId/stop', homeController.stopCharging);

app.get('/services/mapkit/jwt', servicesController.getJwt);

export default app;
