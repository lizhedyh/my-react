import React from 'react';
import { connect } from 'react-redux';
import { TodoItem } from './todo-item';
import { FilterTypes } from '../../constant';
import { toggleTodo, removeTodo } from '../actions';

function TodoList({ todos, onToggleTodo, onRemoveTodo }) {
  return (
    <ul className="todo-list">
      {
        todos && todos.map(item => (
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={() => onToggleTodo(item.id)}
            onRemove={() => onRemoveTodo(item.id)}
          />
        ))
      }
    </ul>
  );
}

const selectTodos = (todos, filter) => {
  switch (filter) {
  case FilterTypes.ALL:
    return todos;
  case FilterTypes.COMPLETED:
    return todos.filter(item => item.completed);
  case FilterTypes.UNCOMPLETED:
    return todos.filter(item => !item.completed);
  default:
    throw new Error('unsupported filter');
  }
};

const mapStateToProps = (state) => {
  return {
    todos: selectTodos(state.todos, state.filter)
  };
}

const mapDisptchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(TodoList);
