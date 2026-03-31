export const saveTodos = (todos: any) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}