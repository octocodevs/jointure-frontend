import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function generate(element, icon, primaryText, secondaryText) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
      children: [
        <Grid container alignItems="flex-start">
          <Grid item>
            <ListItemAvatar key={`avatar-${value}`}>
              <Avatar sx={{ backgroundColor: '#2EE09F' }}>
                {React.cloneElement(icon, { sx: { color: '#101820' } })}
              </Avatar>
            </ListItemAvatar>
          </Grid>
          <Grid item xs>
            <ListItemText
              key={`text-${value}`}
              primary={primaryText}
              secondary={secondaryText}
            />
          </Grid>
        </Grid>,
      ],
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ProposalDetailData() {
  const [dense] = React.useState(false);

  return (
    <Box sx={{ 

      flexGrow: 1, 
      maxWidth: 752,
      mt: 4,
      }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Demo>
          <List dense={dense}>
    {generate(
    <ListItem />,
    <BusinessIcon />,
    "Sector",
    "Alimentación"
  )}
  {generate(
  <ListItem />,
  <LocationOnIcon />,
  "Ubicación",
  "Barcelona"
)}
  {generate(
    <ListItem />,
    <StorefrontIcon />,
    "Canales de venta",
    "Offline"
  )}
  {generate(
  <ListItem />,
  <FavoriteIcon />,
  "Valores",
  "vegano"
)}
  {generate(
    <ListItem />,
    <DescriptionIcon />,
    "Descripción",
    "Lorem Ipsum"
  )}
</List>
          </Demo>
        </Grid>
        
      </Grid>
    </Box>
  );
}