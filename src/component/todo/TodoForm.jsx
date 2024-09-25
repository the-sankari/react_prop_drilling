/* eslint-disable react/prop-types */
import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
    console.log("Submit button clicked");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
