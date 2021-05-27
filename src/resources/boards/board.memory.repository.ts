export {}
const { deleteBoardTasks } = require('../tasks/task.service');
const { Board } = require("./board.model")
/**
 * Module for all Boards Memory related functions
 * @module Board_Memory
 */

/**
 * Array that contains all boards.
 * @typedef {Array} BoardData
 */
let boards: Array<typeof Board> = [];

/**
 * Returns all boards
 * @async
 * @returns {Promise<BoardData>} Returns Array of Boards
 */
const getAllBoards = async (): Promise<typeof boards> => boards;

/**
 * Creates board
 * @async
 * @param board {Board} Board
 * @returns {Promise<number>} No return value
 */
const createBoard = async (board: typeof Board) => boards.push(board);

/**
 * returns board with given Id
 * @async
 * @param boardId {number} Id of a board
 * @returns {Promise<Board>} Returns board
 */
const getBoardById = async (boardId: String): Promise<typeof Board> => boards.find((ele) => ele.id === boardId);

/**
 * Updates board
 * @async
 * @param boardId {number} Id of a board
 * @param updatedBoard {Board} Board
 * @returns {Promise<void>} No return value
 */
const updateBoard = async (boardId: String, updatedBoard: typeof Board) => {
  boards.forEach((ele, idx) => {
    if(ele.id === boardId) {
      boards[idx] = updatedBoard;
    }
  });
};

/**
 * Deletes board
 * @param boardId {number} Id of a board
 * @returns {Promise<void>} No return value
 */
const deleteBoard = async (boardId: String) => {
  boards = boards.filter((ele) => ele.id !== boardId);
  await deleteBoardTasks(boardId);
}


module.exports = { getAllBoards, createBoard, getBoardById, updateBoard, deleteBoard };