import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  experimentalStyled,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Avatar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import avatar from '../../public/static/images/avatars/avatar_6.png';

const DashboardNavbar = ({ onMobileNavOpen, onMobileClose, ...rest }) => {
  const [notifications] = useState([]);

  return (
    <>
      <Hidden lgUp>
        <AppBar elevation={0} {...rest}>
          <Toolbar>
            <IconButton color="inherit" onClick={onMobileNavOpen}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>

      <Hidden lgDown>
        <AppBar
          elevation={0}
          {...rest}
          position="absolute"
          sx={{
            width: 'calc(100% - 256px)',
          }}
        >
          <Toolbar sx={{ backgroundColor: '#f4f6f8' }}>
            <IconButton color="#6e6e6e" edge="start" onClick={onMobileClose}>
              <MenuOpenOutlinedIcon />
            </IconButton>
            <Typography variant="h2" color="textPrimary" noWrap>
              Dashboard
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton aria-label="show 18 new notifications" color="inherit">
              <Badge color="secondary" badgeContent={18}>
                <NotificationsIcon style={{ fontSize: 25, color: '#4b0c62' }} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 10 new messages" color="inherit">
              <Badge color="secondary" badgeContent={10}>
                <ChatOutlinedIcon style={{ fontSize: 25, color: '#4b0c62' }} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 2 new card gift" color="inherit">
              <Badge color="secondary" badgeContent={2}>
                <CardGiftcardIcon style={{ fontSize: 25, color: '#4b0c62' }} />
              </Badge>
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                mx: 1,
              }}
            >
              <Typography color="#5e2b6d" variant="h5">
                Jorge LLanque
              </Typography>
              <Typography color="#7d8188" variant="body2">
                Admin
              </Typography>
            </Box>
            <Avatar
              variant="rounded"
              src={avatar}
              sx={{
                cursor: 'pointer',
                width: 40,
                height: 40,
              }}
              to="/app/account"
            />
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default DashboardNavbar;
