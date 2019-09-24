import React, { Fragment } from "react";
import { Link } from "react-router-dom"
function Task({ task, toggle }) {
  return (
    <Fragment>
      <li onClick={() => toggle(task.id)}>
        {task.competed ? <del>{`${task.task}`}</del> : `${task.task}`}
      </li>
      <button>
          <Link to={`/edittask/${task.id}`}>Edit</Link>
      </button>
    </Fragment>
  );
}

export default Task;
