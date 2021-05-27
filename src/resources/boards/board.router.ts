import { Request, Response } from 'express';
import { IBoard } from './board.model';

const router = require('express').Router();
const boardService = require('./board.service');
const Board = require('./board.model');


router.route('/').get(async (_req: Request, res: Response) => {
  const boards: Array<IBoard> = await boardService.getAllBoards();
  res.status(200).json(boards);
});

router.route('/').post(async (req: Request, res: Response) => {
  const board: IBoard = new Board(req.body);
  await boardService.createBoard(board);
  res.status(201).json(board);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const boardById: IBoard = await boardService.getBoardById(req.params['boardId']);
  if(boardById) {
    res.status(200).json(boardById);
  } else {
    res.sendStatus(404);
  };
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  const updatedBoard: IBoard = new Board(req.body);
  await boardService.updateBoard(req.params['boardId'], updatedBoard);
  res.status(200).json(updatedBoard);
});

router.route('/:boardId').delete(async (req: Request, res: Response) => {
  await boardService.deleteBoard(req.params['boardId']);
  res.sendStatus(204);
});


module.exports = router;