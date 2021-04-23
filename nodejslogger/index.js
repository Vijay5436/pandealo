const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(bodyParser.json());
app.use(helmet());

const logger = require('./util/loggerFile/logger');

const router = require('./router/router');

app.use(morgan('combined', { stream: logger.stream }));

app.use('/file', router);

const port = process.env.PORT;
const server = app.listen({
  port: process.env.PORT,
  host: process.env.HOST,
});

server.on('listening', () => {
  logger.log('info', `${process.env.MSG2}${port}`);
});
server.on('error', () => {
  logger.log('info', `${process.env.MSG2}${port}`);
});
