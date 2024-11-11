import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Button = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.secondary.main,
  }),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.secondary.dark,
    }),
  },
}));

export default Button;
