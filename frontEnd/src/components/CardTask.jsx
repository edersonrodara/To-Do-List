import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardTask = ({ task }) => {
  const [status, setStatus] = useState(task.status);

  useEffect(() => {
    const editStatus = async () => {
      await axios.put(`http://localhost:3000/task/${task._id}`, { status })
    }
    
    editStatus();
  }, [status, task])

  const deleteTask = async () => {
    await axios.delete(`http://localhost:3000/task/${task._id}`)
  }

  let color = 'red';
  if (task.status === 'pronto') {
    color = 'green'
  }
  if (task.status === 'andamento') {
    color = 'blue'
  }

  return (
    <div className={`card ${color}`}>
      <div>
        <button onClick={ deleteTask }>Apagar</button>
      </div>
      <h2>{task.task}</h2>
      <select value={status} onChange={({ target }) => setStatus(target.value)}>
        <option value="pendente">Pendente</option>
        <option value="andamento">Andamento</option>
        <option value="pronto">Pronto</option>
      </select>
      <p>{task.date}</p>
    </div>
  );
}

export default CardTask;