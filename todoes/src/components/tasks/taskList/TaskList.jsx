import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task";
function TaskList({ tasks, toggle, del }) {
    console.log(tasks)
  const tempArr = [1, 2, 3];
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} toggle={toggle} />
        ))}
      </ul>
      <button>
          <Link to="/addtask">Add task</Link>
        </button>
        <button onClick={del} >
            Delete Task
        </button>
    </div>
  );
}

export default TaskList;
