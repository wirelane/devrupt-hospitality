import app from './app';
import config from './config';

app.listen(app.get('port'), () => {
  console.log(
    '\tApp is running at http://localhost:%d in %s mode\n',
    app.get('port'),
    app.get('env')
  );
  console.log('\tPress CTRL-C to stop\n');

  console.log('Config:', config);
});
