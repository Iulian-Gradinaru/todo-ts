/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 *  Styles the Todo List Container
 */
export const TodoListContainer = styled('div')(() => {
  return {
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
    padding: '1rem',
    borderRadius: '10px',
  };
});

/**
 *  Styles the Todo List Title
 */
export const TodoListTitle = styled('h1')(() => {
  return {
    fontSize: '3rem',
    color: '#5c5c5c',
    margin: '2rem 0',
    '& span': {
      fontSize: '1rem',
      color: '#9b9b9b',
      display: 'block',
      marginTop: '0.5rem',
    },
  };
});

/**
 *  Styles the Todo Button
 */
export const TodoButton = styled('button')(() => {
  return {
    padding: 8,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#3f51b5',
    color: '#fff',

    '&:hover': {
      backgroundColor: '#3A4AA5',
    },
  };
});
