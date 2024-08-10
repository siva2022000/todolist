import { useState } from "react";

function TaskAdd({ onCreate }) {
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  const handleTimeChange = function (event) {
    setTime(event.target.value);
  };

  const handleSummaryChange = function (event) {
    setDetails(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    onCreate({ time, details });
    setTime("");
    setDetails("");
  };

  return (
    <div>
      <h3>Add a Task</h3>
      <form onSubmit={handleSubmit}>
        <label>Time</label>
        <input value={time} onChange={handleTimeChange} type="time" />
        <label>Task</label>
        <input value={details} onChange={handleSummaryChange} />
        <button>Add</button>
      </form>
    </div>
  );
}
export default TaskAdd;
