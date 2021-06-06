import { Response } from 'express';
import { exception } from './logger';
import { errorLogger } from './errorLogger';
import { ExtendedError } from './CustomError';

export interface IErrorObject {
  error: Error | ExtendedError,
  res?: Response,
  req?: Request,
  exception?: boolean
}

export const errorHandler = (error: IErrorObject) => {
  if (error.exception) {
    exception(error.error);
  } else {
    errorLogger(error);
  }
}