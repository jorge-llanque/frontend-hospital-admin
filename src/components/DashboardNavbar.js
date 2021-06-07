import React, { useState} from 'react';
import { Link as RouterLink} from 'react-router-dom';
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
    CssBaseline
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';



const DashboardNavbar = ({ onMobileNavOpen, ...rest}) => {
    
    const [notifications] = useState([]);

    return (
      <>
        <AppBar 
          elevation={0} 
          {...rest}
          position="absolute"
          sx={{
            width: 'calc(100% - 256px)'
          }}
        >
          <Toolbar >
              <Hidden lgUp >
                <IconButton
                  color="inherit"
                  onClick={onMobileNavOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden lgDown>
                <IconButton color="inherit" edge="start">
                  <MenuOpenOutlinedIcon />
                </IconButton>
                <IconButton aria-label="show 18 new notifications" color="inherit" >
                    <Badge
                      badgeContent={notifications.length}
                      color="secondary"
                      variant="dot"
                      badgeContent={18}
                    >
                      <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="show 10 new messages" color="inherit" >
                    <Badge
                      color="secondary"
                      variant="dot"
                      badgeContent={10}
                    >
                      <ChatOutlinedIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="show 2 new card gift" color="inherit" >
                    <Badge
                      color="secondary"
                      variant="dot"
                      badgeContent={2}
                    >
                      <CardGiftcardIcon />
                    </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>                
               
              </Hidden>
              
          </Toolbar>
        </AppBar>
      </>
    );
};

DashboardNavbar.propTypes = {
    onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;