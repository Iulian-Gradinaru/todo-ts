/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 *  Styles the Form Wrapper
 */
export const FormWrapper = styled('form')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8px 0',
    padding: '8px',
    borderRadius: '4px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  };
});

/**
 *  Styles the Label
 */
export const Label = styled('label')(() => {
  return {
    marginRight: '16px',
  };
});

/**
 *  Styles the Input
 */
export const Input = styled('input')(() => {
  return {
    flexGrow: 1,
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    marginRight: '16px',
  };
});

/**
 *  Styles the Button
 */
export const Button = styled('button')(() => {
  return {
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  };
});
