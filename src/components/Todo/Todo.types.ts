export interface TodoProps {
  id: string;
  task: string;
  completed: boolean;
  updateTodo: (id: string, updatedTask: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}
