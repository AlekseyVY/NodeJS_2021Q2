import { NextFunction, Request, Response } from 'express';
import { ITask } from './task.model';
import { ExtendedError } from '../../middleware/CustomError';
import { taskValidation } from '../../validators/taskValidation';

const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
const Task = require('./task.model');


router.route('/').get(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks: Array<ITask> = await taskService.getAllTasks(req.params['boardId']);
    if(!tasks) {
      throw new ExtendedError(500, "Internal Server Error");
    }
    res.status(200).json(tasks);
  } catch(err) {
    next(err);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    taskValidation(req);
    const task: ITask = new Task(req.body);
    task.boardId = req.params['boardId'];
    await taskService.createTask(task);
    res.status(201).json(task);
  } catch(err) {
    next(err);
  }
});

router.route('/:taskId').get(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { boardId, taskId } = req.params;
    const taskById: ITask = await taskService.getTaskById(boardId, taskId);
    if(!taskById) {
      throw new ExtendedError(404, "Task not found/.");
    }
    res.status(200).json(taskById);
  } catch(err) {
    next(err);
  }
});

router.route('/:taskId').put(async (req: Request, res: Response, next: NextFunction) => {
  try {
    taskValidation(req)
    const task: ITask = new Task(req.body);
    const { boardId, taskId } = req.params;
    task.boardId = boardId;
    await taskService.updateTask(task, boardId, taskId);
    res.status(200).json(task);
  } catch(err) {
    next(err);
  }
});

router.route('/:taskId').delete(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { boardId, taskId } = req.params;
    await taskService.deleteTask(boardId, taskId);
    res.sendStatus(200);
  } catch(err) {
    next(err);
  }
});

module.exports = router;