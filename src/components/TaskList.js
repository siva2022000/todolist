import TaskShow from "./TaskShow";
function TaskList({ tasks }) {
  const renderedTasks = tasks.map((task, i) => {
    return <TaskShow task={task} key={i}></TaskShow>;
  });
  return <div> {renderedTasks}</div>;
}

export default TaskList;
