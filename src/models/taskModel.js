const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTask = async (task) => {
  const tarefasList = await connection();
  const user = await tarefasList.collection('tasks');

  const query = { task, status: 'pendente', date: Date() }

  const { insertedId: _id } = await user.insertOne(query);

  return {
    _id,
    task,
    status: 'pendente',
    date: Date(),
  };
};

const updateTask = async (idTask, status) => {
  const tarefasList = await connection();
  const task = await tarefasList.collection('tasks');

  const filter = { _id: ObjectId(idTask) };
  const update = { $set: { status } };

  const result = await task.findOneAndUpdate(filter, update, {
    returnDocument: 'after'
  });

  return result.value;
};

const getAlltask = async () => {
  const tarefasList = await connection();
  const task = await tarefasList.collection('tasks');

  const mySort = { task: 1 };

  return await task.find().sort(mySort).toArray();
};

module.exports = {
  createTask,
  updateTask,
  getAlltask,
};
