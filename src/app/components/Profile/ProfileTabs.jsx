
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
    // Aquí puedes gestionar la visualización del contenido según la pestaña seleccionada
  };

  return (

      <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Propuestas creadas">
            <h1>hola</h1>
          </Tab>
          <Tab label="Propuestas sumadas">
            {/* Contenido de "Propuestas sumadas" */}
          </Tab>
          <Tab label="Colaboraciones en marcha">
            {/* Contenido de "Colaboraciones en marcha" */}
          </Tab>
        </Tabs>
      </Box>
  );
}

