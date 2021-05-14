const { deleteUserTasks } = require('../tasks/task.service');

let userBase = [];

const getAll = async () => userBase;

const createUser = async (user) => userBase.push(user);

const getById = async (userId) => userBase.filter((ele) => ele.id === userId);

const updateUser = async (userId, user) => {
   userBase.forEach((ele, idx) => {
    if(ele.id === userId){
      userBase[idx] = user;
    }
  });
};

const deleteUser = async (userId) => {
  userBase = userBase.filter((ele) => ele.id !== userId);
  await deleteUserTasks(userId);
};

module.exports = { getAll, createUser, getById, updateUser, deleteUser };
