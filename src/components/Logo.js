import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../../public/static/logo.png';

const useStyles = makeStyles({
  img: {
    height: 50,
    width: 50,
  },
});

const Logo = (props) => {
  const classes = useStyles();

  return <img className={classes.img} alt="Logo" src={logo} {...props} />;
};

export default Logo;
