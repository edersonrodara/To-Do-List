import axios from 'axios';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const CadastrarTask = () => {
  const { task, setTask, setRefresh } = useContext(AppContext);

  const cadastrarTask = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:3000/task/`, { task });
    setTask("")
    setRefresh("");
  }

  return (
    <div className="card cadastrar">
      <h2>Nova Tarefa</h2>
      <form action="">
        <input value={ task } onChange={ ({ target }) => setTask(target.value) } type="text" />
        <button onClick={ cadastrarTask }>Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarTask;