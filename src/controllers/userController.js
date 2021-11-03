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

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await userService.login({ email, password });
  
//   if (user.status) {
//     return res.status(user.status).json({ message: user.message });
//   }
  
//   // if (user === null) {
//   //   return res.status(401).json({ message: 'Incorrect username or password' });
//   // }
  
//   const { _id, role } = user;
//   const payload = { _id, role, email };
  
//   const token = jwt.sign(payload, secret, jwtConfig);

//   return res.status(200).json({ token });
// };

module.exports = {
  createUser,
  login,
};
