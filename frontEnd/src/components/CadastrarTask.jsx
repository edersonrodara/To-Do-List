import axios from 'axios';
import React, { useState } from 'react';

const CadastrarTask = () => {
  const [task, setTask] = useState("");

  const cadastrarTask = async () => {
    await axios.post(`http://localhost:3000/task/`, { task })
  }
  
  return (
    <div className="card">
      <h2>Nova task</h2>
      <form action="">
        <input onChange={ ({ target }) => setTask(target.value) } type="text" />
        <button onClick={ cadastrarTask }>Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarTask;