import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);
 //將傳入costum hook的第二個參數作為一個變數如下行：
  const transformTask = taskObj => { //從firebase拿來的資料，轉為前端需要的樣子
    const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTasks);

  }
  //useHttp回傳的物件放在這，將sendRequest轉名為fetchTasks
  const {isLoading, error, sendRequest: fetchTasks} = useHttp(
    { url: 'https://tasks-44545-default-rtdb.firebaseio.com/task.json' },
    transformTask
  );


  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
