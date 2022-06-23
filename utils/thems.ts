import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
  },
  palette: {
    primary: {
      main: '#F53838',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});
