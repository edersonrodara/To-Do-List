import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { BsTrash } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

const CardTask = ({ oneTask }) => {
  const { setRefresh} = useContext(AppContext);
  const [status, setStatus] = useState(oneTask.status);
  const [task, setEditTask] = useState(oneTask.task);
  const [habilitar, setHabilitar] = useState("aparecer");
  const [divHabilitar, setDivHabilitar] = useState("lixeira aparecer");
  const [editar, setEditar] = useState("esconder");

  useEffect(() => {
    const editStatusTask = async () => {
      await axios.put(`http://localhost:3000/task/${oneTask._id}`, { status, task })
    }
    
    editStatusTask();
  }, [status, task, habilitar, editar])

  const deleteTask = async () => {
    await axios.delete(`http://localhost:3000/task/${oneTask._id}`);
    setRefresh("");
  }

  let color = 'red';
  if (oneTask.status === 'pronto') {
    color = 'green'
  }
  if (oneTask.status === 'andamento') {
    color = 'blue'
  }
  if (oneTask.status === 'pendente') {
    color = 'red'
  }

  const handleChange = ({ target }) => {
    setStatus(target.value);
    setRefresh("");
  }

  const buttonHablitar = (event) => {
    setDivHabilitar("esconder");
    setHabilitar("esconder");
    setEditar("aparecer");
    event.preventDefault();
    setRefresh("");
  }

  const buttonEditar = (event) => {
    setHabilitar("aparecer");
    setEditar("esconder");
    setDivHabilitar("lixeira aparecer");
    event.preventDefault();
    setRefresh("");
  }
  

  return (
    <div>
      <div className={`card ${color}`}>
          <div className={`${editar}` }>
            <form action="">
              <input onChange={({ target }) => setEditTask(target.value) } value={ task }></input>
              <button onClick={ buttonEditar }>Editar Tarefa</button>
            </form>
          </div>
        <div className={`${divHabilitar}`}>
          <button className="editar" onClick={ buttonHablitar }><FaEdit /></button>
        </div>
        <h2 className={ habilitar }>{oneTask.task}</h2>
        Status
        <select value={status} onChange={ handleChange }> 
          <option value="pendente">Pendente</option>
          <option value="andamento">Andamento</option>
          <option value="pronto">Pronto</option>
        </select>
        <p>{oneTask.date}</p>
      <div className="lixeira">
          <button onClick={ deleteTask }><BsTrash /></button>
      </div>
      </div>
    </div>
  );
}

export default CardTask;