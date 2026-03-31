import React, { useState } from 'react';
import './todo.css';

interface Todo {
  id: number;
  text: string;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (!newTodo) {
      setError('Todo cannot be empty');
      return;
    }
    const newTodoItem: Todo = { id: Date.now(), text: newTodo };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
    setError('');
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (id: number, text: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text } : todo));
  };

  return (
    <div>
      <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => handleUpdateTodo(todo.id, 'Updated todo')}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;