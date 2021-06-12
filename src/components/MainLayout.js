import React from 'react';
import { Outlet } from 'react-router';
import { makeStyles } from '@material-ui/core';
import MainNavbar from './MainNavbar';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: '100%',
      overflow: 'hidden',
      width: '100%',
    },
    wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: 64,
    },
    container: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    content: {
      flex: '1 1 auto',
      height: '100%',
      overflow: 'auto',
    },
  };
});

export default function MainLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainNavbar />
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
