import React, { useState } from "react";

function TaskFrom() {
  const [formValues, setFormValues] = useState({
    id: null,
    task: "",
    completed: false
  });
  // const handleChange = e => {
  //     setFormValues({...formValues , [e.target.name]: e.target.value})
  // } this is a regalur function

  const handleChange = ({ target: { name, value } }) => {
    return setFormValues({ ...formValues, [name]: value });
  }; // this is function just works like the one above but with a disruction mothed

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
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
      <button>submiot</button>
    </form>
  );
}

export default TaskFrom;
