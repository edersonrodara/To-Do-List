import { useEffect, useState } from 'react';
import './App.css';
import CadastrarTask from './components/CadastrarTask';

import axios from 'axios';

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
        {tasks.map((task) => <div key={task._id}>
            {task._id} - {task.task} - {task.status} - {task.date}
          </div>
        )}
    </div>
  );
}

export default App;
