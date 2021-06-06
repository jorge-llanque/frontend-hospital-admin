import React from 'react'
import { ThemeProvider } from '@material-ui/core';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider>
      {routing}
    </ThemeProvider>
  );
};
export default App;
