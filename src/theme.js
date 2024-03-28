// themes/theme.js
"use client"

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
  typography: {
  },
  // Other theme options like spacing, breakpoints, etc.
});

export default theme;
