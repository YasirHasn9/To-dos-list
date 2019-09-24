import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task";
function TaskList({ tasks, toggle, deleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <Task task={task} key={task.id} toggle={toggle} />
        ))}
      </ul>
      <button>
        <Link to="/addtask">Add</Link>
      </button>
      <button onClick={deleteTask}>del</button>
    </div>
  );
}
// 1:25 min
export default TaskList;
