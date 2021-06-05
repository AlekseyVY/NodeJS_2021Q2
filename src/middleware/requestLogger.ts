import { Request, Response } from 'express';
import { logger } from './logger';

const uuid = require('uuid').v4;
const { finished } = require('stream');

export const requestLogger = (req: Request, res: Response) => {
  const { url, body, query, method } = req;
  const begin = Date.now();
  finished(res, () => {
    const { statusCode } = res;
    const ms = Date.now() - begin;
    logger.log('info', {
      "ID": uuid(),
      "METHOD": method,
      "URL": url,
      'QUERY PARAMETERS': query,
      "BODY": body,
      "STATUS CODE": statusCode,
      "EXECUTION TIME": `${ms} milliseconds`
    });
  });
};