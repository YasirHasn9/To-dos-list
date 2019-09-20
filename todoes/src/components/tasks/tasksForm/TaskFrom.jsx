import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function TaskFrom({
  setTasks,
  tasks,
  history,
  edit,
  match: {
    params: { id }
  }
}) {
  const [formValues, setFormValues] = useState({
    id: Date.now(),
    task: "",
    completed: false
  });
  // const handleChange = e => {
  //     setFormValues({...formValues , [e.target.name]: e.target.value})
  // } this is a regalur function
  useEffect(() => {
    if (edit) {
      const editTask = tasks.filter(task => task.id.toString() === id)[0];
      setFormValues(editTask);
    }
  }, []);
  const handleChange = ({ target: { name, value } }) => {
    return setFormValues({ ...formValues, [name]: value });
  }; // this is function just works like the one above but with a disruction mothed

  const handleSubmit = e => {
    e.preventDefault();
    setFormValues({ ...formValues, id: Date.now() });
    setTasks([...tasks, formValues]);
    history.push("/");
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Task from</h1>
      <label>Task</label>
      <input
        type="text"
        name="task"
        value={formValues.task}
        onChange={handleChange}
      />
      <button type="submit">submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
}

export default TaskFrom;
