import { useState } from "react";
import editImg from "../images/editImage.svg";
import deleteImg from "../images/deleteImage.svg";

function TaskShow({ task, onDelete, onUpdate }) {
  const [strikeTask, setStrikeTask] = useState(false);
  const deleteTask = () => {
    onDelete(task);
  };

  const updateTask = () => {
    onUpdate(task);
  };

  const handleChange = (event) => {
    setStrikeTask(event.target.checked);
  };
  return (
    <div className="card">
      <div className="card-content  pt-3 pb-2">
        <div className="columns is-justify-content-space-between">
          <div className="column is-11 ">
            <div className="container">
              <div>{task.time}</div>
              <div>
                <label
                  className="checkbox mt-4"
                  checked={strikeTask}
                  onChange={handleChange}
                >
                  <input type="checkbox" />
                  <span className="ml-2">
                    <b
                      style={
                        strikeTask ? { textDecoration: "line-through" } : {}
                      }
                    >
                      {task.details}
                    </b>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="column has-text-right">
            <div className="delete-custom ">
              <div className=" edit-child-custom">
                <img src={editImg} alt="" onClick={updateTask} />
              </div>
              <div className="delete-child-custom">
                <img src={deleteImg} alt="" onClick={deleteTask} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskShow;
