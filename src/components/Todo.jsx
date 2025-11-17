import React, { useState } from "react";

const Todo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (taskInput.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskInput,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };
  return (
    <>
      <h2>Basic To-Do List</h2>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ padding: "5px 0" }}>
            {task.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
