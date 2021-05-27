import { Request, Response } from 'express';

export {}
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');


router.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/').post(async (req: Request, res: Response) => {
    const newUser = new User(req.body);
    await usersService.addUser(newUser);
  res.status(201).send(User.toResponse(newUser));
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  const userById = await usersService.getById(req.params['userId']);
  res.status(200).send(User.toResponse(userById));
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  const newUser = new User(req.body);
  await usersService.updateUser(req.params['userId'], newUser);
  res.status(200).send(User.toResponse(newUser));
});

router.route('/:userId').delete(async (req: Request, res: Response) => {
  await usersService.deleteUser(req.params['userId']);
  res.status(200).send();
});

module.exports = router;
