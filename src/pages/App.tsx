import React, { useState } from 'react';
import Forms from '../components/forms';
import List from '../components/list';
import style from './App.module.scss'
import Timer from '../components/timer';
import {ITask} from '../types/tasks';
function App() {

  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();
  const [completedTask, setCompletedTask] = useState<ITask>();

  function selectTask(selectedTask : ITask) {
    setSelectedTask(selectedTask);
    setTasks(tasks => tasks.map( task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}></Forms>
      <List
        tasks={tasks}
        selectTask={selectTask}
      ></List>
      <Timer task={selectedTask}></Timer>
    </div>
  );
}

export default App;
