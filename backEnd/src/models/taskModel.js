const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTask = async (task) => {
  const tarefasList = await connection();
  const user = await tarefasList.collection('tasks');

  const date = new Date().toLocaleString();

  const query = { task, status: 'pendente', date }

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

const getAlltask = async (sort) => {
  const tarefasList = await connection();
  const task = await tarefasList.collection('tasks');

  const mySort = { [sort]: 1, task: 1 };

  return await task.find().sort(mySort).toArray();
};

const deleteTask = async (idTask) => {
  const tarefasList = await connection();
  const task = await tarefasList.collection('tasks');

  const filter = { _id: ObjectId(idTask) };

  const result = await task.findOneAndDelete(filter);

  return result;
};

module.exports = {
  createTask,
  updateTask,
  getAlltask,
  deleteTask,
};
