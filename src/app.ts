import { Request, Response, NextFunction } from 'express';
import { requestLogger } from './middleware/requestLogger';

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const { join } = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');

const app = express();
const swaggerDocument = YAML.load(join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter)

app.use((req: Request, res: Response, next: NextFunction) => {
  requestLogger(req, res)
  next()
})

// app.use((err: ErrorRequestHandler, req : Request, res: Response, next: NextFunction) => {
//   next();
// })

module.exports = app;
