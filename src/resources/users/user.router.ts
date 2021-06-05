import { NextFunction, Request, Response } from 'express';
import { IUser } from './user.model';

export {}
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');


router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users: Array<IUser> = await usersService.getAll();
    res.status(200).json(users.map(User.toResponse));
  } catch(err){
    next(err)
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser: IUser = new User(req.body);
    await usersService.addUser(newUser);
    res.status(201).send(User.toResponse(newUser));
  } catch(err) {
    next(err)
  }
});

router.route('/:userId').get(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userById: IUser = await usersService.getById(req.params['userId']);
    res.status(200).send(User.toResponse(userById));
  } catch(err) {
    next(err)
  }
});

router.route('/:userId').put(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser: IUser = new User(req.body);
    await usersService.updateUser(req.params['userId'], newUser);
    res.status(200).send(User.toResponse(newUser));
  } catch(err) {
    next(err)
  }
});

router.route('/:userId').delete(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await usersService.deleteUser(req.params['userId']);
    res.status(200).send();
  } catch(err) {
    next(err)
  }
});

module.exports = router;
