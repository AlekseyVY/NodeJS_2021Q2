const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const addUser = (user) => usersRepo.createUser(user);
const getById = (userId) => usersRepo.getById(userId);
const updateUser = (userId, user) => usersRepo.updateUser(userId, user)
const deleteUser = (userId) => usersRepo.deleteUser(userId)

module.exports = { getAll, addUser, getById, updateUser, deleteUser };
