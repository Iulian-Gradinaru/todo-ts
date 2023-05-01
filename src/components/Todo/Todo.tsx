import React, { useState } from 'react';

/**
 * Imports styles
 */
import { TodoWrapper, TodoText, TodoButton } from './Todo.styles';

/**
 * Imports types
 */
import { TodoProps } from './Todo.types';

/**
 * Displays the component
 */
export const Todo: React.FC<TodoProps> = ({
  id,
  task,
  completed,
  removeTodo,
  updateTodo,
  toggleTodo,
}) => {
  /**
   * Initializes the editing state
   */
  const [isEditing, setIsEditing] = useState<boolean>(false);

  /**
   * Initializes the new task state
   */
  const [newTask, setNewTask] = useState<string>(task);

  /**
   * Handles the remove change
   */
  const handleRemove = () => {
    removeTodo(id);
  };

  /**
   * Handles the toggle change
   */
  const handleToggle = () => {
    toggleTodo(id);
  };

  /**
   * Handles the update change
   */
  const handleUpdate = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    updateTodo(id, newTask);
    setIsEditing(false);
  };

  /**
   * Handles changing the input change
   */
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(evt.target.value);
  };

  /**
   * Handles the edit click change
   */
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
