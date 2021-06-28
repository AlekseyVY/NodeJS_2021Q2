import { getRepository } from 'typeorm';
import { User } from '../../entity/User';


const { deleteUserTasks } = require('../tasks/task.service');
/**
 * Module for all User memory related functions.
 * @module User_Memory
 */

/**
 *This function returns Array of all users in database
 * @async
 * @returns {Promise<UserData>} Array of users
 */
export const getAll = async (): Promise<User[]> => {
  const userRepository = getRepository(User)
  return userRepository.find()
};

/**
 * Takes user and pushes it into array
 * @async
 * @param user {User} Instance of a User class
 * @returns {Promise<number>} No return value
 */
export const createUser = async (user: User) => {
  const userRepository = getRepository(User)
  await userRepository.save(user)
};

/**
 *This function finds and return User by it's Id
 * @async
 * @param userId {number} Id of a User
 * @returns {Promise<User>} User object
 */
const getById = async (userId: string): Promise<User | undefined> => {
  const userRepository = getRepository(User)
  const data = userRepository.findOne(userId)
  if (!data) return undefined
  return data;
}

/**
 *This function takes User object and updates it's correspondence in database
 * @param userId {number} id of a User
 * @param user {User} instance of a User class
 * @returns {Promise<void>} No return value
 */
const updateUser = async (userId: string, user: User) => {
  const userRepository = getRepository(User);
  await userRepository.update(userId, user)
};

/**
 *This function takes Id of a user and delete it from database
 * @param userId {number} Id of a user
 * @returns {Promise<void>} No return value
 */
const deleteUser = async (userId: string) => {
  const userRepository = getRepository(User);
  await userRepository.delete(userId)
  await deleteUserTasks(userId);
};

module.exports = { getAll, createUser, getById, updateUser, deleteUser };
