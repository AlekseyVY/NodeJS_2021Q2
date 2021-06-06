import { Request } from 'express';
import { ExtendedError } from '../middleware/CustomError';

export const boardValidation = (req: Request) => {
  if(!req.body.title) {
    throw new ExtendedError(500, 'User name not provided.');
  }
}