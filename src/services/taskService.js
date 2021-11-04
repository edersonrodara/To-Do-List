const Joi = require('joi');
const taskModel = require('../models/taskModel');
const { ObjectId } = require('mongodb');

const jwt = require('../auth/jwt');

const PENDENTE = 'pendente';
const ANDAMENTO = 'andamento';
const PRONTO = 'pronto';

const createTask = async (task) => {
  const { error } = Joi.object({
    task: Joi.string().required(),
  }).validate({ task });
  if (error) return { stats: 400, message: error.details[0].message };

  return await taskModel.createTask(task);
};

const updateTask = async (idTask, status) => {
  if (!ObjectId.isValid(idTask)) return { stats: 400, message: 'Invalid ID' }

  const { error } = Joi.object({
    status: Joi.string().required(),
  }).validate({ status });
  if (error) return { stats: 400, message: error.details[0].message };

  if (status !== PENDENTE && status !== ANDAMENTO && status !== PRONTO) {
    return { stats: 400, message: 'Status deve ser: pendente, andamento ou pronto' };
  }

  const task = await taskModel.updateTask(idTask, status);
  return task;
};

const getAlltask = async (query) => {
  const task = await taskModel.getAlltask(query);
  return task;
};

module.exports = {
  createTask,
  updateTask,
  getAlltask,
};
