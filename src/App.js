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
    <div>
      <ProfileShow />
      <DateList />
      <TaskList tasks={tasks} />
      <TaskAdd onCreate={createTask} />
    </div>
  );
}

export default App;
