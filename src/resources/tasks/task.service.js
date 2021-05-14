const taskRepo = require('./task.memory,repository')

const getAllTasks = (boardId) => taskRepo.getAllTasks(boardId)
const createTask = (task) => taskRepo.createTask(task)
const getTaskById = (boardId, taskId) => taskRepo.getTaskById(boardId, taskId)
const deleteUserTasks = (userId) => taskRepo.deleteUserTasks(userId)
const deleteBoardTasks = (boardId) => taskRepo.deleteBoardTasks(boardId)
const updateTask = (task, boardId, taskId) => taskRepo.updateTask(task, boardId, taskId)
const deleteTask = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId)

module.exports = { getAllTasks, createTask, getTaskById, deleteUserTasks, deleteBoardTasks, updateTask, deleteTask }