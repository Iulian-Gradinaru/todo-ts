/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 *  Styles the Todo Wrapper
 */
export const TodoWrapper = styled('div')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8px 0',
    padding: '8px',
    borderRadius: '4px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    '&.completed': {
      opacity: 0.5,
      textDecoration: 'line-through',
    },
    '.todo-item': {
      margin: 0,
    },
  };
});

/**
 *  Styles the Todo Text
 */
export const TodoText = styled('span')(() => {
  return {
    flexGrow: 1,
    marginRight: '16px',
  };
});

/**
 *  Styles the Todo Button
 */
export const TodoButton = styled('button')(() => {
  return {
    padding: '4px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#eee',
    },
  };
});
