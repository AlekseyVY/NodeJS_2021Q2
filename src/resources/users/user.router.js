const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
    const newUser = new User(req.body)
    await usersService.addUser(newUser)
  res.status(201).send(User.toResponse(newUser))
});

router.route('/:userId').get(async (req, res) => {
  const userById = await usersService.getById(req.params.userId)
  res.status(200).send(User.toResponse(userById[0]))
});

router.route('/:userId').put(async (req, res) => {
  const newUser = new User(req.body)
  await usersService.updateUser(req.params.userId, newUser)
  res.status(200).send(User.toResponse(newUser))
});

router.route('/:userId').delete(async (req, res) => {
  await usersService.deleteUser(req.params.userId)
  res.sendStatus(204)
});

module.exports = router;
