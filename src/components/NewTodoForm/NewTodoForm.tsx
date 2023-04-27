import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormWrapper, Label, Input, Button } from './NewTodoForm.styles';
import { NewTodoFormProps } from './NewTodoForm.types';

export const NewTodoForm: React.FC<NewTodoFormProps> = ({ createTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTask(evt.target.value);
  };

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
