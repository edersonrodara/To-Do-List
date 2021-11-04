import { useEffect, useState } from 'react';
import './App.css';
import CadastrarTask from './components/CadastrarTask';

import axios from 'axios';
import CardTask from './components/CardTask';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/task')
      .then(({ data }) => {
        console.log(data);
        setTasks(data);
      })
    }, [])

  return (
    <div className="App">
      <CadastrarTask></CadastrarTask>
      <div class="row">
      {tasks.map((task) => <CardTask task={ task } key={ task._id }></CardTask>)}
      </div>
    </div>
  );
}

export default App;
