let tasks = [];

const getAllTasks = async (boardId) => tasks.filter((task) => task.boardId === boardId)

const createTask = async (task) => tasks.push(task)

const deleteUserTasks = async (userId) => {
  tasks.forEach((task, idx) => {
    if(task.userId === userId) {
      tasks[idx].userId = null
    }
  })
}

const deleteBoardTasks = async (boardId) => {
  tasks = tasks.filter((task) => task.boardId !== boardId)
}

const  updateTask = async (task, boardId, taskId) => {
  tasks.forEach((ele, idx) => {
    if(ele.boardId === boardId && ele.id === taskId) {
      tasks[idx] = task;
    }
  })
}

const deleteTask = async (boardId, taskId) => {
  tasks.forEach((task, idx) => {
    if(task.id === taskId && task.boardId === boardId) {
      tasks.splice(idx, 1)
    }
  })
}

const getTaskById = async (boardId, taskId) => tasks.filter((task) => {
  if(task.boardId === boardId && task.id === taskId) {
    return task
  }
  return false
})

module.exports = { getAllTasks, createTask, getTaskById, deleteUserTasks, deleteBoardTasks, updateTask, deleteTask }