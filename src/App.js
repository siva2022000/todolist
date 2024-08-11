import "bulma/css/versions/bulma-no-dark-mode.css";
import "./index.css";
import { useState } from "react";
import ProfileShow from "./components/ProfileShow";
import DateList from "./components/DateList";
import TaskList from "./components/TaskList";
import TaskAdd from "./components/TaskAdd";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = function (task) {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = function (task) {
    let newTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(newTasks);
  };

  const updateTask = function (task) {
    let newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, ...task };
      }
      return t;
    });
    setTasks(newTasks);
  };

  return (
    <div className="flex-custom">
      <ProfileShow />
      <DateList />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      <TaskAdd onCreate={createTask} />
    </div>
  );
}

export default App;
