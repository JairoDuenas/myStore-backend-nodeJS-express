const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandle, boomErrorHandle } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandle);
app.use(errorHandle);

app.listen(port, () => {
  console.log('mi port' + port);
});
