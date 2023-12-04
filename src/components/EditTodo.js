import React, { useState } from "react";

export const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id, priority);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="update Task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="Todo-btn">
        Add Task
      </button>

      <select
        className="dropdown"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low" className="low">
          Low
        </option>
        <option value="medium" className="medium">
          Medium
        </option>
        <option value="high" className="high">
          High
        </option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditTodo;
