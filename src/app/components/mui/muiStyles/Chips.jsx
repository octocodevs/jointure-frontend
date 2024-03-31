import React from 'react';
import { Box, Chip } from '@mui/material';

export default function Chips() {
  return (
    <Box>
        <Chip label="Chip Filled" className='m-2 bg-blue hover:bg-blue-dark' />
        <Chip label="Chip Outlined" variant="outlined" className='m-2 bg-green hover:bg-green-dark'/>
    </Box>
  )
}
