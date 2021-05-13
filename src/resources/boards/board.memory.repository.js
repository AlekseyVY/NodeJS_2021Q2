const { deleteBoardTasks } = require('../tasks/task.service');

const boards = [];



const getAllBoards = async () => boards

const createBoard = async (board) => boards.push(board)

const getBoardById = async (boardId) => boards.filter((ele) => ele.id === boardId)

const updateBoard = async (boardId, updatedBoard) => {
  boards.forEach((ele, idx) => {
    if(ele.id === boardId) {
      boards[idx] = updatedBoard
    }
  })
}

const deleteBoard = async (boardId) => {
  let deleted = false;
  boards.forEach((ele, idx) => {
    if(ele.id === boardId) {
      boards.splice(idx, 1)
      deleted = true
      deleteBoardTasks(boardId)
    }
  })
  return deleted
}
module.exports = { getAllBoards, createBoard, getBoardById, updateBoard, deleteBoard }