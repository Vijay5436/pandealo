const express = require('express');
require('dotenv').config();

const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });
const dataU = require('../controller/controller').uploadData;
const dataD = require('../controller/controller').downloadData;

router.post('/upload', upload.single('photo'), dataU);
router.get('/download', dataD);
module.exports = router;
