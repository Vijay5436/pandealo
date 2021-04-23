const express = require('express');
const { Router } = require('express');

const router = express.Router();
const data = require('../controler/controller').details;

router.post('/profile', data);
module.exports = router;
