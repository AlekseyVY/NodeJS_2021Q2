import { Request } from 'express';
import { logger } from './logger';

export const loggingHelper = (req: Request) => {
  const { url, body, query } = req
  logger.log('info', {
    "URL": url,
    'QUERY PARAMETERS': query,
    "BODY": body
  });
}