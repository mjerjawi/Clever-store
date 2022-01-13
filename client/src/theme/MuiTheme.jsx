import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import theme from './theme';

const MuiTheme = ({
  children
}) => {
  // console.log(theme);
  return <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>;
};

export default MuiTheme;