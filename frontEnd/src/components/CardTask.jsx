import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { BsTrash } from 'react-icons/bs'

const CardTask = ({ task }) => {
  const { setRefresh } = useContext(AppContext);
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
    <div>
      <div className={`card ${color}`}>
        <h2>{task.task}</h2>
        Status
        <select value={status} onChange={ handleChange }> 
          <option value="pendente">Pendente</option>
          <option value="andamento">Andamento</option>
          <option value="pronto">Pronto</option>
        </select>
        <p>{task.date}</p>
      <div className="lixeira">
          <button onClick={ deleteTask }><BsTrash /></button>
      </div>
      </div>
    </div>
  );
}

export default CardTask;