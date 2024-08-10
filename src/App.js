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
    setTasks([...tasks, task]);
  };

  return (
    <div className="flex-custom">
      <ProfileShow />
      <DateList />
      <TaskList tasks={tasks} />
      <TaskAdd onCreate={createTask} />
    </div>
  );
}

export default App;
