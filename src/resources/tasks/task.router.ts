import { Request, Response } from 'express';
import { ITask } from './task.model';

const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
const Task = require('./task.model');


router.route('/').get(async (req: Request, res: Response) => {
  const tasks: Array<ITask> = await taskService.getAllTasks(req.params['boardId']);
  res.status(200).json(tasks);
});

router.route('/').post(async (req: Request, res: Response) => {
  const task: ITask = new Task(req.body);
  task.boardId = req.params['boardId'];
  await taskService.createTask(task);
  res.status(201).json(task);
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  const { boardId, taskId } = req.params;
  const taskById: ITask = await taskService.getTaskById(boardId, taskId);
  if(taskById) {
    res.status(200).json(taskById);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:taskId').put(async (req: Request, res: Response) => {
  const task: ITask = new Task(req.body);
  const { boardId, taskId } = req.params;
  task.boardId = boardId;
  await taskService.updateTask(task, boardId, taskId);
  res.status(200).json(task);
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  const { boardId, taskId } = req.params;
  await taskService.deleteTask(boardId, taskId);
  res.sendStatus(200);
});

module.exports = router;