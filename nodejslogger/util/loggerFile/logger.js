const {
  createLogger,
  format,
  transports,
} = require('winston');

const logger = createLogger({
  transports: [
    new transports.File({
      filename: 'file.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.Console(),
  ],
});
logger.stream = {
  write(message) {
    logger.info(message);
  },
};
module.exports = logger;
