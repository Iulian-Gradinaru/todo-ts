export type NewTodoFormProps = {
  createTodo: (todo: { task: string; id: string; completed: boolean }) => void;
};
