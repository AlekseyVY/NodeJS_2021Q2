const usersRepo = require('./user.memory.repository');

/**
 * Module for all User service related functions.
 * @module User_Service
 */

/**
 * Function that returns Array of all Users
 * @returns {Promise<UserData>}
 */
const getAll = () => usersRepo.getAll();

/**
 * Function that calls createUser function and pass User
 * @param user {User} User
 * @returns {Promise<number>} No return value
 */
const addUser = (user) => usersRepo.createUser(user);

/**
 * Function that calls getById function and pass UserId
 * @param userId {number} Id of a user
 * @returns {Promise<User>} Returns User
 */
const getById = (userId) => usersRepo.getById(userId);

/**
 * Function that calls updateUser function and pass UserId and User
 * @param userId {number} Id of a User
 * @param user {User} User
 * @returns {Promise<void>} No return value
 */
const updateUser = (userId, user) => usersRepo.updateUser(userId, user);

/**
 * Function that calls deleteUser function and pass UserId
 * @param userId {number} Id of a User
 * @returns {Promise<void>} No return value
 */
const deleteUser = (userId) => usersRepo.deleteUser(userId);

module.exports = { getAll, addUser, getById, updateUser, deleteUser };
