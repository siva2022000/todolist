import { useState } from "react";

function TaskAdd({ onCreate }) {
  const [time, setTime] = useState("12:00");
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
    setTime("12:00");
    setDetails("");
  };

  return (
    <div
      className="flex-buttom-custom content has-background-info"
      width="100%"
    >
      <h5>Add a Task</h5>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Time</label>
          <div className="control">
            <input value={time} onChange={handleTimeChange} type="time" />
          </div>
        </div>
        <div className="field">
          <label className="label">Task</label>
          <div className="control">
            <textarea
              className="textarea"
              value={details}
              onChange={handleSummaryChange}
              rows="1"
              cols="40"
            ></textarea>
          </div>
        </div>

        <button className="button is-link is-light">Add</button>
      </form>
    </div>
  );
}
export default TaskAdd;
