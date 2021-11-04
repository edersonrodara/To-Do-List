const jwt = require('jsonwebtoken');
const taskService = require('../services/taskService');

require('dotenv').config()

const createTask = async (req, res) => {
  const { body } = req;
  const token = req.headers.authorization;

  const user = await taskService.createTask(body, token);

  if (user.status) {
    return res.status(user.status).json({ message: user.message });
  }
  
  res.status(201).json(user);
};

module.exports = {
  createTask,
};
