import { styled } from '@mui/system';

export const TodoListContainer = styled('div')({
  textAlign: 'center',
  backgroundColor: '#f7f7f7',
  padding: '1rem',
  borderRadius: '10px',
});

export const TodoListTitle = styled('h1')({
  fontSize: '3rem',
  color: '#5c5c5c',
  margin: '2rem 0',
  '& span': {
    fontSize: '1rem',
    color: '#9b9b9b',
    display: 'block',
    marginTop: '0.5rem',
  },
});

export const TodoListButtons = styled('div')({});
