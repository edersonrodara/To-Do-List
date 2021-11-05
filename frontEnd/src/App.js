// import { useEffect, useState } from 'react';
import './App.css';
import CadastrarTask from './components/CadastrarTask';

// import axios from 'axios';
import CardTask from './components/CardTask';
import { useContext } from 'react';
import AppContext from './context/AppContext';

function App() {
  const { tasks } = useContext(AppContext);
  
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const { data } = await axios.get('http://localhost:3000/task');
  //       setTasks(() => {
  //         return data;
  //       } );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getUser();
  //   }, [])

  return (
      <div className="App">
        <CadastrarTask></CadastrarTask>
        <div className="row">
        {tasks.map((task) => <CardTask task={ task } key={ task._id }></CardTask>)}
        </div>
      </div>
  );
}

export default App;
