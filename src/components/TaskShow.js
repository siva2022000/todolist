import editImg from "../images/editImage.svg";
import deleteImg from "../images/deleteImage.svg";

function TaskShow({ task }) {
  return (
    <div className="card">
      <div className="card-content  pt-3 pb-2">
        <nav className="level">
          <div className="level-left ">
            <div className="level-item">
              <div className="container">
                <div>{task.time}</div>
                <div>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="ml-2">
                      <b>{task.details}</b>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="level-right">
            <div>
              <div className="mt-0">
                <img src={editImg} alt="" />
              </div>
              <div className="mt-5 mb-0">
                <img src={deleteImg} alt="" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default TaskShow;
