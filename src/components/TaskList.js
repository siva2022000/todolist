import TaskShow from "./TaskShow";
function TaskList({ tasks }) {
  const renderedTasks = tasks.map((task, i) => {
    return <TaskShow task={task} key={i}></TaskShow>;
  });

  return (
    <div className="container" style={{ paddingTop: "30px" }}>
      {renderedTasks}
    </div>
  );
}

export default TaskList;
