
'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';
import CreatedProposals from './Proposals/CreatedProposals';
import InProgressCollabs from './Proposals/InProgressCollabs';
import JoinedProposals from './Proposals/JoinedProposals';

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Container>
        <Box sx={{ bgcolor: 'background.paper',overflowX: 'auto' }} >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
            <Tab label="Propuestas creadas" />
            <Tab label="Propuestas sumadas" />
            <Tab label="Colaboraciones en marcha" />
          </Tabs>
          {value === 0 && (
            <CreatedProposals />
          )}
          {value === 1 && (
            <InProgressCollabs />
          )}
          {value === 2 && (
            <JoinedProposals />
          )}
        </Box>
      </Container>
    );
  }


