const jwt = require('jsonwebtoken');

require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const creatToken = (userId) => {
  const token = jwt.sign({ userId }, secret, jwtConfig);
  return token;
};

const validateJwt = (token) => {
  if (!token) return { isValid: true, err: 'Token not found' };

  try {
    const conteudoToken = jwt.verify(token, secret);
    return { isValid: false, conteudoToken };
  } catch (error) {
    return { isValid: true, err: 'Expired or invalid token' };
  }
};

module.exports = {
  validateJwt,
  creatToken,
};
