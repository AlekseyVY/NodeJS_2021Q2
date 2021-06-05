import winston from 'winston';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/history.log",
      level: "info",
      format: winston.format.json()
    }),
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
      format: winston.format.json()
    })
  ]
});