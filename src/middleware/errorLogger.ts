import { logger } from './logger';

export const errorLogger = (err: Error) => {
  console.log(err);
  logger.log('error', {
    "ERROR": err.message
  })
}