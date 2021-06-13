import { Request, Response } from 'express';
import { errorLogger, exception } from './logger';

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

export const errorHandler = (error: IErrorObject, res?: Response) => {
  if (error.exception) {
    exception(error.error);
  } else {
    errorLogger(error, res);
  }
}

export const boardValidation = (req: Request) => {
  if(!req.body.title) {
    throw new ExtendedError(500, 'User name not provided.');
  }
}

export const taskValidation = (req: Request) => {
  if(!req.body.title) {
    throw new ExtendedError(500, 'Task title not provided.');
  }
  if (!req.body.description) {
    throw new ExtendedError(500, 'Description for task are not provided.');
  }
}

export const userValidation = (req: Request) => {
  if(!req.body.name) {
    throw new ExtendedError(500, 'User name not provided.');
  }
  if (!req.body.login || !req.body.password) {
    throw new ExtendedError(500, 'Login or Password are not provided.');
  }
}