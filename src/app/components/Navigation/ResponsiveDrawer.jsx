"use client"

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import CustomAppBar from './CustomAppBar';
import { LogoutRounded, PeopleRounded, HomeRounded, NoteAddRounded, DashboardRounded } from '@mui/icons-material';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/authContext';
import Cookies from 'js-cookie';
import { logoutUser } from '../../../../services/axios';

const drawerWidth = 300;

export default function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { logout, getAuthToken } = useAuthContext();
  const router = useRouter();

  const authToken = getAuthToken();

  const handleLogout = () => {
    Cookies.remove("laravel_session", { domain: "localhost", path: "/" });
    logout();
    logoutUser(authToken);
    router.push('/');
  };

  const menuItems = [
    { text: 'Inicio', icon: <HomeRounded />, href: 'http://localhost:3000/admin' },
    { text: 'Mi perfil', icon: <PeopleRounded />, href: 'http://localhost:3000/admin/profile'},
    { text: 'Crear propuesta', icon: <NoteAddRounded />, href: 'http://localhost:3000/admin/newcollab' },
    { text: 'Desconectarse', icon: <LogoutRounded />, action: handleLogout },
  ];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <MenuItem key={index} index={index} {...item} />
          ))}
        </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomAppBar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

