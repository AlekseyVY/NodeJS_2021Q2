export {}
const { deleteUserTasks } = require('../tasks/task.service');
const { User } = require("./user.model")
/**
 * Module for all User memory related functions.
 * @module User_Memory
 */

/**
 * Array that contains all users
 * @typedef {Array} UserData
 */
let userBase: Array<typeof User> = [];

/**
 *This function returns Array of all users in database
 * @async
 * @returns {Promise<UserData>} Array of users
 */
const getAll = async (): Promise<typeof userBase> => userBase;

/**
 * Takes user and pushes it into array
 * @async
 * @param user {User} Instance of a User class
 * @returns {Promise<number>} No return value
 */
const createUser = async (user: typeof User) => userBase.push(user);

/**
 *This function finds and return User by it's Id
 * @async
 * @param userId {number} Id of a User
 * @returns {Promise<User>} User object
 */
const getById = async (userId: String): Promise<typeof User> => userBase.find((ele) => ele.id === userId);

/**
 *This function takes User object and updates it's correspondence in database
 * @param userId {number} id of a User
 * @param user {User} instance of a User class
 * @returns {Promise<void>} No return value
 */
const updateUser = async (userId: String, user: typeof User) => {
   userBase.forEach((ele, idx) => {
    if(ele.id === userId){
      userBase[idx] = user;
    }
  });
};

/**
 *This function takes Id of a user and delete it from database
 * @param userId {number} Id of a user
 * @returns {Promise<void>} No return value
 */
const deleteUser = async (userId: String) => {
  userBase = userBase.filter((ele) => ele.id !== userId);
  await deleteUserTasks(userId);
};

module.exports = { getAll, createUser, getById, updateUser, deleteUser };
