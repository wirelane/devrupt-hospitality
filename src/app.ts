import express from 'express';
import compression from 'compression';
import i18n from 'i18n';

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

i18n.configure({
  directory: 'i18n',
  defaultLocale: 'de',
  queryParameter: 'lang',
  updateFiles: false
});

app.use(i18n.init);

// Routes
// User Interface
app.get('/', homeController.indexEvseId);
app.get('/evseid/:evseId', homeController.showEvseId);

// Callbacks
app.post('/evseid/:evseId/start', homeController.startCharging);
app.post('/evseid/:evseId/stop', homeController.stopCharging);

app.get('/services/mapkit/jwt', servicesController.getJwt);

export default app;
