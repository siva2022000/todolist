import { useState } from "react";

function TaskAdd() {
  const [time, setTime] = useState("");
  const [task, setTask] = useState("");

  const handleTimeChange = function (event) {
    setTime(event.target.value);
  };

  const handleTaskChange = function (event) {
    setTask(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log(time);
    console.log(task);
    setTime("");
    setTask("");
  };

  return (
    <div>
      <h3>Add a Task</h3>
      <form onSubmit={handleSubmit}>
        <label>Time</label>
        <input value={time} onChange={handleTimeChange} type='time' />
        <label>Task</label>
        <input value={task} onChange={handleTaskChange} />
        <button>Add</button>
      </form>
    </div>
  );
}
export default TaskAdd;
