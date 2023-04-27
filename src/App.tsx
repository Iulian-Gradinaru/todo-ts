/**
 * Import styles
 */
import './App.css';

import { TodoList } from './components/TodoList';

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};
