// 创造action对象的构造函数
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

let nextId = 0; // 用于递增给id赋值

export const addTodo = text => ({
  id: nextId++,
  type: ADD_TODO,
  text,
  completed: false,
});

export const toggleTodo = id => ({
  id,
  type: TOGGLE_TODO,
});

export const removeTodo = id => ({
  id,
  type: REMOVE_TODO,
});
