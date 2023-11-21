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
    // if yes, parse it
    // if not, return an empty array
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // update local storage when there are new tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function createTask(content) {
    const newTask = {
      id: Date.now(),
      content,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
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
