function TaskShow({ task }) {
  return (
    <div>
      <div>{task.time}</div>
      <div>{task.details}</div>
    </div>
  );
}

export default TaskShow;
