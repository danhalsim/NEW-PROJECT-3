import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    // render each task
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
