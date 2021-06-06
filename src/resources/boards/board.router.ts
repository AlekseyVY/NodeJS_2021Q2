import { NextFunction, Request, Response } from 'express';
import { IBoard } from './board.model';
import { ExtendedError } from '../../middleware/CustomError';
import { boardValidation } from '../../validators/boardValidation';

const router = require('express').Router();
const boardService = require('./board.service');
const Board = require('./board.model');


router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const boards: Array<IBoard> = await boardService.getAllBoards();
    if(!boards) {
      throw new ExtendedError(500, "Internal Server Error");
    }
    res.status(200).json(boards);
  } catch(err) {
    next(err);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    boardValidation(req);
    const board: IBoard = new Board(req.body);
    await boardService.createBoard(board);
    res.status(201).json(board);
  } catch(err) {
    next(err);
  }
});

router.route('/:boardId').get(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const boardById: IBoard = await boardService.getBoardById(req.params['boardId']);
    if (!boardById) {
      throw new ExtendedError(404, "Board not found.");
    }
    res.status(200).json(boardById);
  }
  catch(err) {
    next(err);
  }
});

router.route('/:boardId').put(async (req: Request, res: Response, next: NextFunction) => {
  try {
    boardValidation(req);
    const updatedBoard: IBoard = new Board(req.body);
    await boardService.updateBoard(req.params['boardId'], updatedBoard);
    res.status(200).json(updatedBoard);
  } catch(err) {
    next(err);
  }
});

router.route('/:boardId').delete(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await boardService.deleteBoard(req.params['boardId']);
    res.sendStatus(204);
  } catch (err) {
    next(err)
  }
});


module.exports = router;