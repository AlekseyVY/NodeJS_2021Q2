const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
const Task = require('./task.model');


router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAllTasks(req.params.boardId);
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const task = new Task(req.body)
  task.boardId = req.params.boardId;
  await taskService.createTask(task)
  res.status(201).json(task);
});

router.route('/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params;
  const taskById = await taskService.getTaskById(boardId, taskId)
  if(taskById[0] !== undefined) {
    res.status(200).json(taskById[0])

  } else {
    res.sendStatus(404)
  }
});

router.route('/:taskId').put(async (req, res) => {
  const task = new Task(req.body)
  const { boardId, taskId } = req.params;
  task.boardId = boardId;
  await taskService.updateTask(task, boardId, taskId);
  res.status(200).json(task);
});

router.route('/:taskId').delete(async (req, res) => {
  const { boardId, taskId } = req.params;
  await taskService.deleteTask(boardId, taskId)
  res.sendStatus(200);
});

module.exports = router;