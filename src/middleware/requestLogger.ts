import { Request, Response } from 'express';
import { logger } from './logger';

const { finished } = require('stream')

export const requestLogger = (req: Request, res: Response) => {
  const { url, body, query, method } = req;
  finished(res, () => {
    const { statusCode } = res;
    logger.log('info', {
      "METHOD": method,
      "URL": url,
      'QUERY PARAMETERS': query,
      "BODY": body,
      "STATUS CODE": statusCode
    });
  })
}