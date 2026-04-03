import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC<Todo> = ({ id, text, completed }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <span>{text}</span>
    </div>
  );
};

export default Todo;