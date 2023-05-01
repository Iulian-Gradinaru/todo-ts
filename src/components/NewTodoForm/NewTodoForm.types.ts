/**
 * Defines the component New Todo Form Props interface
 */
export type NewTodoFormProps = {
  createTodo: (todo: { task: string; id: string; completed: boolean }) => void;
};
