import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import axios from 'axios';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [refresh, setRefresh] = useState("");

  useEffect(() => {
    getTasks();
    setRefresh(1)
    }, [refresh, task])

    const getTasks = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/task');
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    }

  const contextValue = {
    tasks,
    setTasks,
    task,
    setTask,
    getTasks,
    setRefresh,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

// Provider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Provider;
