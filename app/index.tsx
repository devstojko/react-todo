import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todo';

const root = document.getElementById('root');

try {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    const parsedTodos = JSON.parse(storedTodos);
    ReactDOM.render(<TodoApp />, root);
  } else {
    ReactDOM.render(<TodoApp />, root);
  }
} catch (error) {
  console.error('Error loading todos:', error);
  ReactDOM.render(<div>Error loading todos</div>, root);
}
