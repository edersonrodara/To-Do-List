const connection = require('./connection');

const createTask = async (userId, body) => {
  const { task, status = null, assign = null } = body;
  const tarefasList = await connection();
  const user = await tarefasList.collection('tasks');

  const { insertedId: _id } = await user.insertOne({ userId, task, status, assign });

  return {
    _id,
    userId,
    task,
    status,
    assign,
  };
};

module.exports = {
  createTask,
};
