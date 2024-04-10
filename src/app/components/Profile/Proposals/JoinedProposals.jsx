import { Typography, Box } from '@mui/material';
import React from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';


export default function JoinedProposals() {

  return (
    <Box className="flex justify-center items-center flex-col h-auto mt-12">
      <Box>
        <ConstructionIcon sx={{ color: '#60b7c2', fontSize: '5rem' }} />
      </Box>
      <Typography variant='h2'>En construcción</Typography>
    </Box>
  )
}