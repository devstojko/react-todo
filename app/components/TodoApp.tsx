import React, { useState, useEffect } from 'react';
import TodoComponent from './Todo';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoComponent />
    </div>
  );
};

export default TodoApp;