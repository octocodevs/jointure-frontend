import React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

const MenuItem = ({ index, text, icon, href }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={<Typography variant="body2">{text}</Typography>} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
