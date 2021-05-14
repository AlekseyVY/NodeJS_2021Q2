const { deleteBoardTasks } = require('../tasks/task.service');

let boards = [];

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
  boards = boards.filter((ele) => ele.id !== boardId)
  await deleteBoardTasks(boardId)
}


module.exports = { getAllBoards, createBoard, getBoardById, updateBoard, deleteBoard }