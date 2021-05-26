/**
 * Module for all Tasks Memory related functions
 * @module Task_Memory
 */

/**
 * TasksData of all tasks.
 * @typedef {Array} TasksData
 */
let tasks = [];

/**
 * Returns all Tasks of given board
 * @async
 * @param boardId {number} Id of Board
 * @returns {Promise<TasksData>} Returns all tasks in a array.
 */
const getAllTasks = async (boardId) => tasks.filter((task) => task.boardId === boardId);

/**
 * Creates task
 * @async
 * @param task {Task} Task
 * @returns {Promise<number>} No return value
 */
const createTask = async (task) => tasks.push(task);

/**
 * Deletes tasks that assigned to {@link User}
 * @async
 * @param userId {number} Id of a User
 * @returns {Promise<void>} No return value
 */
const deleteUserTasks = async (userId) => {
  tasks.forEach((task, idx) => {
    if(task.userId === userId) {
      tasks[idx].userId = null;
    }
  });
};

/**
 * Deletes tasks of a given board
 * @async
 * @param boardId {number} Board Id
 * @returns {Promise<void>} No return value
 */
const deleteBoardTasks = async (boardId) => {
  tasks = tasks.filter((task) => task.boardId !== boardId);
};

/**
 * Updates task
 * @async
 * @param task {Task} Task
 * @param boardId {number} Id of a board
 * @param taskId {number} Id of a task
 * @returns {Promise<void>} No return value
 */
const  updateTask = async (task, boardId, taskId) => {
  tasks.forEach((ele, idx) => {
    if(ele.boardId === boardId && ele.id === taskId) {
      tasks[idx] = task;
    }
  });
};

/**
 * Deletes specific task from specific board
 * @async
 * @param boardId {number} Id of a board
 * @param taskId {number} Id of a task
 * @returns {Promise<void>} No return value
 */
const deleteTask = async (boardId, taskId) => {
  tasks.forEach((task, idx) => {
    if(task.id === taskId && task.boardId === boardId) {
      tasks.splice(idx, 1);
    }
  });
};

/**
 * Returns task by Id
 * @async
 * @param boardId {number} Id of a board
 * @param taskId {number} Id of a task
 * @returns {Promise<Task>} Returns Task
 */
const getTaskById = async (boardId, taskId) => tasks.find((task) => {
  if(task.boardId === boardId && task.id === taskId) {
    return task;
  }
  return false;
});

module.exports = { getAllTasks, createTask, getTaskById, deleteUserTasks, deleteBoardTasks, updateTask, deleteTask };