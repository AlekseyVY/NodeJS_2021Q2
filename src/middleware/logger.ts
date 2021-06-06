import winston from 'winston';
import fs from 'fs';

export const historyLogger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/history.log",
      level: "info",
      format: winston.format.json()
    })
  ]
});

export const errorLog = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
      format: winston.format.json()
    })
  ]
})

export const exception = (error: Error) => {
  process.stdout.write("\n");
  process.stdout.write(`\x1b[91m${`Error message: ${error.message}`}\x1b[39m`);
  fs.writeFileSync('./logs/crash.log',
    `System crashed: ${error.message}\n`, {flag: "a+"}
  )
  process.exit(1);
}