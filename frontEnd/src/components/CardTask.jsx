import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

const CardTask = ({ task }) => {
  const { getTasks, setTask, setRefresh } = useContext(AppContext);
  const [status, setStatus] = useState(task.status);

  useEffect(() => {
    const editStatus = async () => {
      await axios.put(`http://localhost:3000/task/${task._id}`, { status })
    }
    
    editStatus();
  }, [status, task])

  const deleteTask = async () => {
    await axios.delete(`http://localhost:3000/task/${task._id}`);
    setRefresh("");
  }

  let color = 'red';
  if (task.status === 'pronto') {
    color = 'green'
  }
  if (task.status === 'andamento') {
    color = 'blue'
  }
  if (task.status === 'pendente') {
    color = 'red'
  }

  const handleChange = ({ target }) => {
    setStatus(target.value);
    setRefresh("");
  }

  return (
    <div className={`card ${color}`}>
      <div>
        <button onClick={ deleteTask }>Apagar</button>
      </div>
      <h2>{task.task}</h2>
      <select value={status} onChange={ handleChange }>
        <option value="pendente">Pendente</option>
        <option value="andamento">Andamento</option>
        <option value="pronto">Pronto</option>
      </select>
      <p>{task.date}</p>
    </div>
  );
}

export default CardTask;