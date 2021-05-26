const router = require('express').Router();
const boardService = require('./board.service');
const Board = require('./board.model');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoards();
  res.status(200).json(boards);
});

router.route('/').post(async (req, res) => {
  const board = new Board(req.body);
  await boardService.createBoard(board);
  res.status(201).json(board);
});

router.route('/:boardId').get(async (req, res) => {
  const boardById = await boardService.getBoardById(req.params.boardId);
  if(boardById) {
    res.status(200).json(boardById);
  } else {
    res.sendStatus(404);
  };
});

router.route('/:boardId').put(async (req, res) => {
  const updatedBoard = new Board(req.body);
  await boardService.updateBoard(req.params.boardId, updatedBoard);
  res.status(200).json(updatedBoard);
});

router.route('/:boardId').delete(async (req, res) => {
  await boardService.deleteBoard(req.params.boardId);
  res.sendStatus(204);
});


module.exports = router;