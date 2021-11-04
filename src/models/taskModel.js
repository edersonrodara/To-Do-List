const { query } = require('express');
const connection = require('./connection');

const createTask = async (userId, body) => {
  const { task, status = null, assign = null } = body;
  const tarefasList = await connection();
  const user = await tarefasList.collection('tasks');

  const query = { userId, task, status, assign }

  const { insertedId: _id } = await user.insertOne(query);

  return {
    _id,
    userId,
    task,
    status,
    assign,
  };
};

// const updateTask = async (idTask, body) => {
//   const { task, status = null, assign = null } = body;
//   const tarefasList = await connection();
//   const user = await tarefasList.collection('tasks');

//   const queryFind = { idTask };
//   const queryUpdate = { task, status, assign };

//   const { insertedId: _id } = await user.findOneAndUpdate(queryFind, queryUpdate );

//   return {
//     _id,
//     userId,
//     task,
//     status,
//     assign,
//   };
// };

module.exports = {
  createTask,
};
