// import { useEffect, useState } from 'react';
import './App.css';
import CadastrarTask from './components/CadastrarTask';

// import axios from 'axios';
import CardTask from './components/CardTask';
import { useContext } from 'react';
import AppContext from './context/AppContext';
import SortCard from './components/SortCard';

function App() {
  const { tasks } = useContext(AppContext);
  
  return (
      <div className="App">
        <div className="nav">
          <CadastrarTask></CadastrarTask>
          <SortCard></SortCard>
        </div>
        <div className="row">
        {tasks.map((task) => <CardTask task={ task } key={ task._id }></CardTask>)}
        </div>
      </div>
  );
}

export default App;
