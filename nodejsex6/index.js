require('dotenv').config();
const express = require('express');
const multer = require('multer');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(bodyparser.json());
app.use(morgan('combined'));

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('photo'), (req, res, next) => {
  if (upload) {
    res.status(200).json({
      status: 'success',
      message: process.env.SUCCESS_MSG,
    });
  } else {
    res.status(404).json({
      status: 'failure',
      message: 'file upload failed',
    });
  }
});

app.get('/download', (req, res) => {
  const filepath = '/uploads/';
  const { filename } = req.query;
  const send = `${__dirname}${filepath}${filename}`;
  if (res.status(200)) {
    res.download(send); // Set disposition and send it.
  } else if (!send) {
    res.json({
      status: process.env.ERROR_MSG,
    });
  }
  // const { file } = req.params.file;
  // if (!file) {
  //   const error = new Error('soory');
  //   return res.send(error);
  // }
  // const location = path.join('./upload/', file);
  // res.download(location, file);
});

const server = app.listen({
  port: process.env.PORT,
  host: process.env.HOST,
});
server.on('listening', () => {
  console.log('Listening', process.env.PORT);
});
server.on('error', () => {
  console.log('error', process.env.PORT);
});
