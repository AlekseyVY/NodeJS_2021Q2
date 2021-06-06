import { Request } from 'express';
import { ExtendedError } from '../middleware/CustomError';

export const userValidation = (req: Request) => {
  if(!req.body.name) {
    throw new ExtendedError(500, 'User name not provided.');
  }
  if (!req.body.login || !req.body.password) {
    throw new ExtendedError(500, 'Login or Password are not provided.');
  }
}