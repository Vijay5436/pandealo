const express = require('express');
require('dotenv').config();
const bodyparser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyparser.json());
const router = require('./router/route');
app.use('/user',router);
const secretkey = process.env.SECRETEKEY;
const servar = app.listen({
    port: process.env.PORT,
    host: process.env.HOST,
});
servar.on('listening', () => {

})