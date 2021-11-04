import React from 'react';

const CardTask = ({ task }) => {
  let color = 'red';
  if (task.status === 'pronto') {
    color = 'green'
  }
  if (task.status === 'andamento') {
    color = 'blue'
  }

  return (
    <div className={`card ${ color }`}>
      <div className="titleCard">
        <button>Apagar</button>
        <h2>{task.task}</h2>
      </div>
      <p>{task.status}</p>
      <p>{task.date}</p>
      <p>task ID: {task._id}</p>
      <button>Editar</button>
    </div>
  );
}

export default CardTask;