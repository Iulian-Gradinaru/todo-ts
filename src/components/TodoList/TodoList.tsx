import { useState } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { NewTodoForm } from '../NewTodoForm/';
import { Todo } from '../Todo';

import {
  TodoListContainer,
  TodoListTitle,
  TodoButton,
} from './TodoList.styles';

import { TodoItem } from './TodoList.types';

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const create = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };

  const remove = (id: string) => {
    setTodos(todos.filter((t: TodoItem) => t.id !== id));
  };

  const update = (id: string, updatedTask: string) => {
    const updatedTodos = todos.map((todo: TodoItem) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleCompletion = (id: string) => {
    const updatedTodos = todos.map((todo: TodoItem) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearAll = () => {
    setTodos([]);
  };

  const todoItems = todos.map((todo: TodoItem) => (
    <Transition key={todo.id} timeout={500} classNames="todo-item">
      {(state) => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={remove}
          updateTodo={update}
          toggleTodo={toggleCompletion}
          state={state}
        />
      )}
    </Transition>
  ));

  return (
    <TodoListContainer>
      <TodoListTitle>
        Get To Work!
        <span>An Animated Todo List Made With React Hooks.</span>
      </TodoListTitle>
      <NewTodoForm createTodo={create} />
      <ul>
        <TransitionGroup>{todoItems}</TransitionGroup>
      </ul>
      <div>
        <TodoButton onClick={clearAll}>Clear All</TodoButton>
      </div>
    </TodoListContainer>
  );
};
