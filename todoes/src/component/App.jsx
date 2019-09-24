import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import TaskForm from "./tasks/taskForm/TaskForm";
import TaskList from "./tasks/taskList/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) {
      if (localStorage.getItem("tasks")) {
        setTasks(JSON.parse(localStorage.getItem("tasks")));
      }
    }
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("tasks") &&
      JSON.parse(localStorage.getItem("tasks").length !== tasks.length)
    ) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const toggleComplete = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, competed: !task.competed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };
const deleteTask = () => {
    const updatedTask = tasks.filter(task => !task.competed)
    setTasks(updatedTask)
    console.log(updatedTask)
}
  return (
    <div>
      <Switch>
          <Route path="/edittask/:id"   render={props => (
            <TaskForm setTasks={setTasks} tasks={tasks} {...props} edit={true} />
          )} />
        <Route
          path="/addtask"
          render={props => (
            <TaskForm setTasks={setTasks} tasks={tasks} {...props} edit={false} />
          )}
        />

        <Route
          exact
          path="/"
          render={props => (
            <TaskList {...props} tasks={tasks} toggle={toggleComplete} deleteTask={deleteTask} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
