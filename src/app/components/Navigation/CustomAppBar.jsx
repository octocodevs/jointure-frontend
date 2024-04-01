"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const CustomAppBar = ({ handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        zIndex: (theme) => theme.zIndex.drawer + 2,
      }}
    >
      <Toolbar>
        <IconButton
          color="black"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Image
          src="/img/jointure-logo.png"
          alt="Jointure logo"
          width={216}
          height={47}
        />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
