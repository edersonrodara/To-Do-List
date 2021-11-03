const Joi = require('joi');
const userModel = require('../models/userModel');

const createUser = async ({ name, email, password }) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate({ name, email, password });
  if (error) return { status: 400, message: error.details[0].message };
  
  const findEmail = await userModel.findByEmail(email);
  if (findEmail) return { status: 400, message: 'Email already registered' };

  const user = await userModel.createUser({ name, email, password });
  return user;
};

const login = async ({ email, password }) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate({ email, password });
  if (error) return { status: 400, message: error.details[0].message };

  const login = await userModel.login({ email, password });

  if (!login) return { status: 403, message: 'Incorrect email or password' };

  return login;
};

module.exports = {
  createUser,
  login,
};
