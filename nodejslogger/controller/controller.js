const path = require('path');
const logger = require('../util/loggerFile/logger');

exports.uploadData = (req, res, next) => {
  if (req.file) {
    res.status(200).json({
      status: 'success',
      measage: process.env.SUCCESS_MSG,
    });
    logger.log('info', process.env.SUCCESS_MSG);
  } else {
    res.status(404).json({
      status: 'failure',
      measage: process.env.ERROR_MSG,
    });
  }
};

exports.downloadData = (req, res, next) => {
  const filePath = '../uploads/';
  const { fileName } = req.query;
  const name = `${filePath}${fileName}`;
  const sendFile = path.join(`${__dirname}`, `${name}`);
  if (res.status(200)) {
    res.download(sendFile);
    logger.log('info', `${process.env.DOWN_MSG}${fileName}`);
  } else if (!sendFile) {
    res.json({
      status: process.env.ERROR_MSG,
    });
  }
};
