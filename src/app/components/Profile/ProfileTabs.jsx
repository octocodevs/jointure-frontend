
'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container } from '@mui/material';
import CreatedProposals from './Proposals/CreatedProposals';

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Container>
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Propuestas creadas" />
            <Tab label="Propuestas sumadas" />
            <Tab label="Colaboraciones en marcha" />
          </Tabs>
          {value === 0 && (
            <CreatedProposals />
          )}
          {value === 1 && (
            <Box> Contenido de "Colaboraciones sumadas" Añadir componente "JoinedProposals"</Box>
          )}
          {value === 2 && (
            <Box>Contenido de "Colaboraciones en marcha", Añadir componente "InProgressCollabs"</Box>
          )}
        </Box>
      </Container>
    );
  }


