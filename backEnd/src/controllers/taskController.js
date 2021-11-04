const taskService = require('../services/taskService');

// require('dotenv').config()

const createTask = async (req, res) => {
  const { task } = req.body;

  const user = await taskService.createTask(task);

  if (user.stats) {
    return res.status(user.stats).json({ message: user.message });
  }
  
  res.status(201).json(user);
};

const updateTask = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const task = await taskService.updateTask(idTask = id, status);

  if (task.stats) {
    return res.status(task.stats).json({ message: task.message });
  }
  
  res.status(201).json(task);
};

const getAlltask = async (req, res) => {
  const { sort } = req.query;

  const task = await taskService.getAlltask(sort);

  res.status(201).json(task);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await taskService.deleteTask(idTask = id);

  res.status(201).json({ "task deletada": task });
};

module.exports = {
  createTask,
  updateTask,
  getAlltask,
  deleteTask,
};
