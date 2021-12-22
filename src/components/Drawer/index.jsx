import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const SideMenu = () => (
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar sx={{ justifyContent: 'right' }}>
      <Icon>menu</Icon>
    </Toolbar>
    <Divider />
    <List>
      <Link to="/">
        <ListItem button key="Home">
          <ListItemIcon>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText primary="home" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/users">
        <ListItem button key="Users">
          <ListItemIcon>
            <Icon>perm_identity</Icon>
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </Link>
      <Link to="/courses">
        <ListItem button key="Courses">
          <ListItemIcon>
            <Icon>book</Icon>
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
      </Link>
    </List>
  </Drawer>
);

export default SideMenu;
