import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const SortCard = () => {
  const { setSort, sort } = useContext(AppContext);

  return (
    <div className="card sort">
      <h2>Ordenado por</h2>
      <select value={ sort } onChange={({ target }) => { setSort(target.value) }}>
        <option value="task">Tarefa</option>
        <option value="status">Status</option>
        <option value="date">Data</option>
      </select>
    </div>
  );
}

export default SortCard;