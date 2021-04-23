const express = require('express');
const route = express.Router();

const veryfyTok = require('../controller/controller').verfiyToken;
const check = require('../controller/controller').uesrcheck;