function TaskShow({ task }) {
  return (
    <div className="card">
      <div className="card-content">
        <b>{task.time}</b>
        <div>{task.details}</div>
      </div>
    </div>
  );
}

export default TaskShow;
