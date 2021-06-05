import { errorLogger } from './errorLogger';

export const errorHandler = (err: Error) => {
  errorLogger(err)
}