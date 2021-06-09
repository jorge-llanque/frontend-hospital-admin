import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: '#4d0e63',
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#f42d54',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
    },
  },
  shadows,
  typography,
});

export default theme;
