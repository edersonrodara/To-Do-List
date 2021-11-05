import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import axios from 'axios';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [refresh, setRefresh] = useState("");
  const [sort, setSort] = useState("task");

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/task?sort=${sort}`);
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    }

    getTasks();
    setRefresh(1)
    }, [refresh, task, sort])

  const contextValue = {
    tasks,
    setTasks,
    task,
    setTask,
    setRefresh,
    sort,
    setSort,
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
