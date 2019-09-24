import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TaskForm({
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
    competed: false
  });
  useEffect(() => {
    if (edit) {
      const editTask = tasks.filter(task => task.id.toString() === id)[0];
      setFormValues(editTask);
    }
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const updateTask = taskId => {
    const updateTask = tasks.map(task => {
      if (task.id === taskId) {
        console.log("found");
        return formValues;
      } else {
        console.log("not found");
        return task;
      }
    });
    setTasks(updateTask);
  };

  const addTask = () => {
    setFormValues({ ...formValues, id: Date.now() });
    setTasks([...tasks, formValues]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    edit ? updateTask(formValues.id) : addTask();
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Task Form </h1>
      <input
        type="text"
        value={formValues.task}
        name="task"
        onChange={handleChange}
      />
      <button>
        <Link to="/">My List</Link>
      </button>
    </form>
  );
}

export default TaskForm;
