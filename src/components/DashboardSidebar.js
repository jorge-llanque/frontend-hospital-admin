import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Hidden from '@material-ui/core/Hidden';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from 'react-feather';
import NavItem from './NavItem';
import { Box } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

const user = {
  avatar: 'avatar',
  jobTitle: 'Senior Developer',
  name: 'Jorge LLanque Chagua',
};
const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },
  {
    href: '/app/doctors',
    icon: UsersIcon,
    title: 'Doctors',
  },
  {
    href: '/app/patients',
    icon: ShoppingBagIcon,
    title: 'Patients',
  },
  {
    href: '/app/specialties',
    icon: UserIcon,
    title: 'Specialties',
  },
  {
    href: '/app/histories',
    icon: UserIcon,
    title: 'Histories',
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings',
  },
];

const DashboardSidebar = ({ open, openMobile, handleDrawerClose }) => {
  const classes = useStyles();

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={handleDrawerClose}
          open={open}
          variant="temporary"
        ></Drawer>
      </Hidden>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default DashboardSidebar;
