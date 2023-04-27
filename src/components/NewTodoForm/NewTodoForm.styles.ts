import { styled } from '@mui/system';

export const FormWrapper = styled('form')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '8px 0',
  padding: '8px',
  borderRadius: '4px',
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
});

export const Label = styled('label')({
  marginRight: '16px',
});

export const Input = styled('input')({
  flexGrow: 1,
  padding: '8px',
  border: 'none',
  borderRadius: '4px',
  marginRight: '16px',
});

export const Button = styled('button')({
  padding: '8px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
});
