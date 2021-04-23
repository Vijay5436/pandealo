const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(bodyparser.json());
app.use(morgan('combined'));
const port = 4007;
const router = require('./route/router');

app.use('/user', router);
const servar = app.listen({
  port,
  host: 'localhost',
});
servar.on('listening', () => {
  console.log('listening', port);
});
servar.on('error', () => {
  console.log('error', port);
});
