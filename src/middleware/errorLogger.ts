import { Response } from 'express';
import { logger } from './logger';
import { IErrorObject } from './errorHandler';
import { ExtendedError } from './CustomError';

export const errorLogger = (error: IErrorObject, res?: Response) => {
  if(error.error instanceof ExtendedError) {
    logger.log("error", {
      "ERROR": error.error.msg
    })
    res?.sendStatus(error.error.statusCode);
  } else {
    logger.log("error", {
      "ERROR": error.error.message
    })
    res?.status(500).send();
  }
}