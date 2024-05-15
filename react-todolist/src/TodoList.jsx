import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    setNewTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="todo-input"
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask} className="todo-button">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <span className="todo-item-text">{task.text}</span>
            <div>
              <button
                onClick={() => handleToggleComplete(index)}
                className="todo-complete-button"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="todo-delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;