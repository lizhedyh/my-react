import React from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';

function Todos() {
  return (
    <div className="todos">
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export { Todos };
