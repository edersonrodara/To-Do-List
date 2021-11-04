const Joi = require('joi');
const taskModel = require('../models/taskModel');

const jwt = require('../auth/jwt');

const createTask = async (body, token) => {
  const { task } = body;
  const { error } = Joi.object({
    task: Joi.string().required(),
  }).validate({ task });
  if (error) return { status: 400, message: error.details[0].message };

  const validToken = jwt.validateJwt(token);
  if (validToken.isValid) return { status: 400, message: validToken.err }
  const { conteudoToken: { userId } } = validToken;

  const user = await taskModel.createTask(userId, body);
  return user;
};

module.exports = {
  createTask,
};
