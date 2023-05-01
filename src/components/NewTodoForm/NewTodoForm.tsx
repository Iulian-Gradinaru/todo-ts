import React, { useState } from 'react';

/**
 * External imports
 */
import { v4 as uuidv4 } from 'uuid';

/**
 * Imports styles
 */
import { FormWrapper, Label, Input, Button } from './NewTodoForm.styles';

/**
 * Imports types
 */
import { NewTodoFormProps } from './NewTodoForm.types';

/**
 * Displays the component
 */
export const NewTodoForm: React.FC<NewTodoFormProps> = ({ createTodo }) => {
  /**
   * Initializes the count state
   */
  const [task, setTask] = useState<string>('');

  /**
   * Handles changing the task change
   */
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTask(evt.target.value);
  };

  /**
   * Handles submit the task
   */
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    createTodo({ task, id: uuidv4(), completed: false });
    setTask('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor="task">New Todo</Label>
      <Input
        type="text"
        placeholder="New Todo"
        id="task"
        name="task"
        value={task}
        onChange={handleChange}
      />
      <Button>Add Todo</Button>
    </FormWrapper>
  );
};
