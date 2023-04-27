import React from 'react';

import { TodoProps } from './Todo.types';

import { TodoWrapper, TodoText, TodoButton } from './Todo.styles';

export const Todo: React.FC<TodoProps> = ({
  id,
  task,
  completed,
  removeTodo,
  updateTodo,
  toggleTodo,
}) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [newTask, setNewTask] = React.useState<string>(task);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleUpdate = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    updateTodo(id, newTask);
    setIsEditing(false);
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(evt.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <TodoWrapper className={completed ? 'completed' : ''}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input type="text" value={newTask} onChange={handleInputChange} />
          <TodoButton type="submit">Save</TodoButton>
        </form>
      ) : (
        <>
          <TodoText onClick={handleToggle}>{task}</TodoText>
          <div>
            <TodoButton onClick={handleEditClick}>Edit</TodoButton>
            <TodoButton onClick={handleRemove}>Remove</TodoButton>
          </div>
        </>
      )}
    </TodoWrapper>
  );
};
