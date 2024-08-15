import TaskShow from "./TaskShow";
function TaskList({ tasks, onDelete, onUpdate }) {
  const renderedTasks = tasks.map((task) => {
    return (
      <TaskShow
        task={task}
        key={task.id}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  });

  return (
    <div className="container" style={{ paddingTop: "30px" }}>
      {renderedTasks}
    </div>
  );
}

export default TaskList;
