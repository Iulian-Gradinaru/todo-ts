import { styled } from '@mui/system';

export const TodoWrapper = styled('div')({
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
});

export const TodoText = styled('span')({
  flexGrow: 1,
  marginRight: '16px',
});

export const TodoButton = styled('button')({
  padding: '4px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#eee',
  },
});
