export class LocalStorage {
  private static STORAGE_KEY = 'todos';

  public static getTodos(): Todo[] {
    const storedTodos = localStorage.getItem(LocalStorage.STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  }

  public static saveTodos(todos: Todo[]): void {
    localStorage.setItem(LocalStorage.STORAGE_KEY, JSON.stringify(todos));
  }
}
