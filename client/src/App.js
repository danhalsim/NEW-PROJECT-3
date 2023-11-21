import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState(() => {
    // get tasks saved in local storage
    const savedTasks = localStorage.getItem("tasks");

    // check if savedTasks has a value
    // if yes, parse and return it
    // if not, return an empty array
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // update local storage when there are new tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // create a new task with the timestamp as the id
  function createTask(content) {
    const newTask = {
      id: Date.now(),
      content,
    };

    // add new task to the tasks array
    setTasks([...tasks, newTask]);
  }

  // delete a task based on its id
  function deleteTask(id) {
    // filter by keeping tasks only with id that does not match the given id
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div class="container">
      <Header />
      <Form createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
