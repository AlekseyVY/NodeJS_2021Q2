import { Response } from 'express';
import { IErrorObject } from './errorHandler';
import { ExtendedError } from './CustomError';
import { errorLog } from './logger';

export const errorLogger = (error: IErrorObject, res?: Response) => {
  if(error.error instanceof ExtendedError) {
    errorLog.log('error', {
      "ERROR": error.error.msg
    })
    res?.sendStatus(error.error.statusCode);
  } else {
    errorLog.log('error', {
      "ERROR": error.error.message
    })
    res?.sendStatus(500);
  }
}