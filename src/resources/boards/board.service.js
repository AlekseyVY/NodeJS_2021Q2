const boardRepo = require('./board.memory.repository');
/**
 * Module for all Boards Service related functions
 * @module Board_Service
 */

/**
 * Function that calls getAllBoards function
 * @returns {Promise<BoardData>} Returns Array of Boards
 */
const getAllBoards = () =>  boardRepo.getAllBoards();

/**
 * Function that calls createBoard function and pass board
 * @param board {Board} Board
 * @returns {Promise<number>} No return value
 */
const createBoard = (board) => boardRepo.createBoard(board);

/**
 * Function that calls getBoardById function and pass boardId
 * @param boardId {number} If of a board
 * @returns {Promise<Board>} Returns Board
 */
const getBoardById = (boardId) => boardRepo.getBoardById(boardId);

/**
 * Function that calls updateBoard function and pass boardId and updatedBoard
 * @param boardId {number} Id of a board
 * @param updatedBoard {Board} Board
 * @returns {Promise<void>} No return value
 */
const updateBoard = (boardId, updatedBoard) => boardRepo.updateBoard(boardId, updatedBoard);

/**
 * Function that calls deleteBoard function and pass boardId
 * @param boardId {number} Id of a board
 * @returns {Promise<void>} No return value
 */
const deleteBoard = (boardId) => boardRepo.deleteBoard(boardId);

module.exports = { getAllBoards, createBoard, getBoardById, updateBoard, deleteBoard };
