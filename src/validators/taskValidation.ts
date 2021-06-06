import { Request } from 'express';
import { ExtendedError } from '../middleware/CustomError';

export const taskValidation = (req: Request) => {
  if(!req.body.title) {
    throw new ExtendedError(500, 'Task title not provided.');
  }
  if (!req.body.description) {
    throw new ExtendedError(500, 'Description for task are not provided.');
  }
}