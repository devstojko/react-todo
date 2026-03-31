import React from 'react';
import './TodoList.css';

interface TodoItem {
  id: number;
  text: string;
}

interface TodoListProps {
  items: TodoItem[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className="todo-item">
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;