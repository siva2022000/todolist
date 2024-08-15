import "bulma/css/versions/bulma-no-dark-mode.css";
import "./index.css";
import { useState, useEffect } from "react";
import ProfileShow from "./components/ProfileShow";
import DateList from "./components/DateList";
import TaskList from "./components/TaskList";
import TaskAdd from "./components/TaskAdd";
import axios from "axios";

function splitDate(date) {
  return date.toISOString().split("T")[0];
}

function App() {
  const [curDate, setCurDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  let changeDate = (date) => {
    setCurDate(date);
  };

  let day = splitDate(curDate);
  console.log("🚀 ~ App ~ day:", day);

  const getTasks = async () => {
    let resp = await axios.get(`http://localhost:3001/${day}`);
    console.log("🚀 ~ getTasks ~ resp.response :", resp.data);
    setTasks(resp.data || []);
  };

  const createTask = async function (task) {
    let resp = await axios.post(`http://localhost:3001/${day}`, task);
    console.log("🚀 ~ createTask ~ resp :", resp.response);
    setTasks([...tasks, resp.data]);
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

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="flex-custom">
      <ProfileShow />
      <DateList curDate={curDate} onChange={changeDate} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      <TaskAdd onCreate={createTask} />
    </div>
  );
}

export default App;
