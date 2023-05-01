import { TransitionStatus } from 'react-transition-group';

/**
 * Defines the component New Todo Form Props interface
 */
export interface TodoProps {
  id: string;
  task: string;
  completed: boolean;
  updateTodo: (id: string, updatedTask: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  state: TransitionStatus;
}
