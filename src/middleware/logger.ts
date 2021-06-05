import winston from 'winston';

const logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "error.log",
      level: "error"
    }),
    new winston.transports.File({
      filename: "history.log"
    })
  ]
});

module.exports = logger;