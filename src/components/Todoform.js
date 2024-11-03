import React, { useState } from 'react';

const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input before adding the task
    if (!value.trim()) {
      alert("Please enter a task before adding!");
      return;
    }

    addTodo(value.trim());
    setValue("");
  };

  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ENTER YOUR TASK OF TODAY"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        ADD TASK
      </button>
    </form>
  );
};

export default Todoform;
