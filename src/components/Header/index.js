import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { AuthContext } from '../../context/auth';

const drawerWidth = 240;

export default function ButtonAppBar() {
  const authContext = useContext(AuthContext);

  const logout = () => {
    authContext.setAuth('');
  };
  return (
    <Box sx={{ flexGrow: 1, marginLeft: `${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px)` }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ubademy - Backoffice
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
