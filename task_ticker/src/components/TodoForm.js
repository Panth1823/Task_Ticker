import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="TodoInput"
        value={value}
        placeholder="What is the task for today?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="Todo-btn">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
