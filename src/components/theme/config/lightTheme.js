import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c1c1c',
    },
    secondary: {
      main: '#dc014f',
      light: 'rgb(227, 51, 114)',
      dark: 'rgb(154, 0, 55)',
    },
    error: {
      main: '#fb3c2e',
    },
    warning: {
      main: '#ef8f02',
    },
    success: {
      main: '#3e9e41',
    },
  },
});
