import winston from 'winston';
import fs from 'fs';
import { Request, Response } from 'express';


export interface IErrorObject {
  error: Error | ExtendedError,
  res?: Response,
  req?: Request,
  exception?: boolean
}

export class ExtendedError extends Error {
  statusCode: number;

  msg: string | ArrayBufferView;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.msg = message;
  }
}

const uuid = require('uuid').v4;
const { finished } = require('stream');

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
    `System crashed: ID: ${uuid()}, ERROR MESSAGE: ${error.message}, DATE: ${new Date()}\n`, {flag: "a+"}
  )
  process.exit(1);
}

export const errorLogger = (error: IErrorObject, res?: Response) => {
  if(error.error instanceof ExtendedError) {
    errorLog.log('error', {
      "ID": uuid(),
      "ERROR DATE": new Date(),
      "ERROR": error.error.msg,
      "STATUS CODE": error.error.statusCode,
    })
    res?.sendStatus(error.error.statusCode);
  } else {
    errorLog.log('error', {
      "ID": uuid(),
      "ERROR DATE": new Date(),
      "ERROR": error.error.message,
      "BODY": error.error
    })
    res?.sendStatus(500);
  }
}

export const requestLogger = (req: Request, res: Response) => {
  const { url, body, query, method } = req;
  const begin = Date.now();
  finished(res, () => {
    const { statusCode } = res;
    if(statusCode <= 230) {
      const ms = Date.now() - begin;
      historyLogger.log('info', {
        "ID": uuid(),
        "METHOD": method,
        "URL": url,
        'QUERY PARAMETERS': query,
        "BODY": body,
        "STATUS CODE": statusCode,
        "EXECUTION TIME": `${ms} milliseconds`
      });
    }
  });
};