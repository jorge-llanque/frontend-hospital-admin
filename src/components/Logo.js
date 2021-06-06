import { experimentalStyled } from '@material-ui/core';
import React from 'react';
import logo from '../../public/static/logo.png';

const Img = experimentalStyled('img')({
  height: 50,
  width: 50,
});
const Logo = (props) => <Img alt="Logo" src={logo} {...props} />;

export default Logo;
