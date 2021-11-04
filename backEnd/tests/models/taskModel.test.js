const sinon = require('sinon');
const { expect } = require('chai');

const mongoConnection = require('../../src/models/connection');
const taskModel = require('../../src/models/taskModel');


describe('Inserir uma nova Task', () => {
  let connectionMock;

  const task = {
    task: 'Estudar por 2 horas',
  }

  before(() => {
    const ID_EXAMPLE = '604cb554311d68f491ba5781';
    const insertOne = async () => ({
      insertedId: ID_EXAMPLE
    });
    const collection = async () => ({
      insertOne
    });
    const db = async (databaseName) => ({
      collection
    });
    const getConnectionMock = async () => ({
      db
    });

    connectionMock = getConnectionMock()
      .then((conn) => conn.db('model_example'));

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  /* Restauraremos a função `getConnection` original após os testes. */
  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe.only('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await taskModel.createTask(task);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" da nova task inserida', async () => {
      const response = await taskModel.createTask(task);

      expect(response).to.have.a.property('_id')
    });

    it('tal objeto possui a chave "task" da nova task inserida', async () => {
      const response = await taskModel.createTask(task);

      expect(response).to.have.a.property('task')
    });
  });
});

describe('Editar task', () => {
  const {
    idTask,
    status
  } = {
    idTask: '6183eed2cbed730ba0f65099',
    status: 'pronto',
  }

  describe('quando é editado com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await taskModel.updateTask(idTask, status);

      expect(response).to.be.a('Object')
    });

    it('tal objeto é editado', async () => {
      const response = await taskModel.updateTask(idTask, status);

      expect(response.status).to.have.a.string('pronto')
    });
  });
});