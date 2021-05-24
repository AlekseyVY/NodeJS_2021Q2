const boardRepo = require('./board.memory.repository');

const getAllBoards = () =>  boardRepo.getAllBoards();
const createBoard = (board) => boardRepo.createBoard(board);
const getBoardById = (boardId) => boardRepo.getBoardById(boardId);
const updateBoard = (boardId, updatedBoard) => boardRepo.updateBoard(boardId, updatedBoard);
const deleteBoard = (boardId) => boardRepo.deleteBoard(boardId);

module.exports = { getAllBoards, createBoard, getBoardById, updateBoard, deleteBoard };
