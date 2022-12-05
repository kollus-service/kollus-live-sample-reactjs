import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = (mode) => {
  // default theme is dark
  if (!mode) mode = "dark";

  return {
    palette: {
      mode,
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
      neutral: {
        main: '#000000',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  };
};

export default theme;
