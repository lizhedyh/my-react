import React from 'react';
import { Todos } from './todos';
import { Filter } from './filter';

function TodoApp() {
  return (
    <div>
      <Todos></Todos>
      <Filter></Filter>
    </div>
  );
}

export { TodoApp };

