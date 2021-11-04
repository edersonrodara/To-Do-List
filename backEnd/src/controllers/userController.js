const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

require('dotenv').config()

const secret = process.env.PW_JWT;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userService.createUser({ name, email, password });

  if (user.status) {
    return res.status(user.status).json({ message: user.message });
  }
  
  res.status(201).json({ user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login({ email, password });

  if (user.status) {
    return res.status(user.status).json({ message: user.message });
  }
  
  return res.status(200).json({ token: user });
};

module.exports = {
  createUser,
  login,
};
