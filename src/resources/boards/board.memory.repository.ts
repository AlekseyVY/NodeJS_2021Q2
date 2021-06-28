import { getRepository } from 'typeorm';
import { Board } from '../../entity/Board';

const { deleteBoardTasks } = require('../tasks/task.service');
/**
 * Module for all Boards Memory related functions
 * @module Board_Memory
 */

/**
 * Returns all boards
 * @async
 * @returns {Promise<BoardData>} Returns Array of Boards
 */
const getAllBoards = async (): Promise<Board[]> => {
  const boardRepository = getRepository(Board)
  return boardRepository.find()
};

/**
 * Creates board
 * @async
 * @param board {Board} Board
 * @returns {Promise<number>} No return value
 */
const createBoard = async (board: Board) => {
  const boardRepository = getRepository(Board)
  await boardRepository.save(board)
};

/**
 * returns board with given Id
 * @async
 * @param boardId {number} Id of a board
 * @returns {Promise<Board>} Returns board
 */
const getBoardById = async (boardId: string): Promise<Board | undefined> => {
  const boardRepository = getRepository(Board)
  const data = boardRepository.findOne(boardId)
  if (!data) return undefined
  return data;
};

/**
 * Updates board
 * @async
 * @param boardId {number} Id of a board
 * @param updatedBoard {Board} Board
 * @returns {Promise<void>} No return value
 */
const updateBoard = async (boardId: string, updatedBoard: Board) => {
  const boardRepository = getRepository(Board);
  await boardRepository.update({id: boardId}, {...updatedBoard});
};

/**
 * Deletes board
 * @param boardId {number} Id of a board
 * @returns {Promise<void>} No return value
 */
const deleteBoard = async (boardId: string) => {
  const boardRepository = getRepository(Board);
  await boardRepository.delete(boardId)
  await deleteBoardTasks(boardId);
}


module.exports = { getAllBoards, createBoard, getBoardById, updateBoard, deleteBoard };