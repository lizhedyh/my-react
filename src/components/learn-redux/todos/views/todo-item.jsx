import React from 'react';

function TodoItem({ onToggle, onRemove, completed, text }) {
  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      <input
        className="toggle"
        onClick={onToggle}
        type="checkbox"
        checked={completed ? true : false}
        readOnly
      >
      </input>
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemove}>x</button>
    </li>
  );
}

export { TodoItem };
