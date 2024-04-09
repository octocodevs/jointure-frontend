import * as React from 'react';
import { useEffect, useState } from 'react';
import { getCollaborationById } from '../../../../services/axios.js';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import EventIcon from '@mui/icons-material/Event';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FlagIcon from '@mui/icons-material/Flag';
import DescriptionIcon from '@mui/icons-material/Description';



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
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const pathname = window.location.pathname;
      const collabId = pathname.split("/").pop();

      try {
        const data = await getCollaborationById(collabId);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
    <EventIcon />,
    "Fecha del evento",
    data && data.collab_start_date
  )}
  {generate(
    <ListItem />,
    <EventAvailableIcon />,
    "Fecha límite del evento",
    data && data.collab_end_date
  )}
  {generate(
    <ListItem />,
    <FlagIcon />,
    "Objetivos y Metas",
    data && data.objectives
  )}
  {generate(
    <ListItem />,
    <DescriptionIcon />,
    "Propuesta",
    data && data.proposal
  )}
</List>
          </Demo>
        </Grid>
        
      </Grid>
    </Box>
  );
}