import { ITask } from './task.model';

const taskRepo = require('./task.memory,repository');
/**
 * Module for all Tasks Service related functions
 * @module Task_Service
 */

/**
 * Function that calls getAllTasks function and pass boardId
 * @param boardId {number} Id of a board
 * @returns {Promise<TasksData>} Returns all tasks of a given board
 */
const getAllTasks = (boardId: String): Array<ITask> => taskRepo.getAllTasks(boardId);

/**
 * Function that calls createTask function and pass task
 * @param task {Task} Task
 * @returns {Promise<number>} No return value
 */
const createTask = (task: ITask) => taskRepo.createTask(task);

/**
 * Function that calls getTaskById function and pass boardId and taskId
 * @param boardId {number} Id of a board
 * @param taskId {number} Id of a task
 * @returns {Promise<Task>} Returns Task
 */
const getTaskById = (boardId: String, taskId: String): ITask => taskRepo.getTaskById(boardId, taskId);

/**
 * Function that calls deleteUserTasks function and pass userId
 * @param userId {number} Id of a user
 * @returns {Promise<void>} No return value
 */
const deleteUserTasks = (userId: String) => taskRepo.deleteUserTasks(userId);

/**
 * Function that calls deleteBoardTasks function and pass boardId
 * @param boardId {number} Id of a board
 * @returns {Promise<void>} No return value
 */
const deleteBoardTasks = (boardId: String) => taskRepo.deleteBoardTasks(boardId);

/**
 * Function that calls updateTask function and pass task, boardId and taskId
 * @param task {Task} Task
 * @param boardId {number} id of a board
 * @param taskId {number} id of a Task
 * @returns {Promise<void>} No return value
 */
const updateTask = (task: ITask, boardId: String, taskId: String) => taskRepo.updateTask(task, boardId, taskId);

/**
 * Function that calls deleteTask function and pass boardId and taskId
 * @param boardId {number} Id of a board
 * @param taskId {number} Id of a task
 * @returns {Promise<void>} No return value
 */
const deleteTask = (boardId: String, taskId: String) => taskRepo.deleteTask(boardId, taskId);

module.exports = { getAllTasks, createTask, getTaskById, deleteUserTasks, deleteBoardTasks, updateTask, deleteTask };