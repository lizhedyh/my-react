import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './components/learn-redux/store';
import { TodoApp } from './components/learn-redux/todoApp';
// import { CounterPanel } from './components/learn-redux/counter-panel/panel';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>
);
