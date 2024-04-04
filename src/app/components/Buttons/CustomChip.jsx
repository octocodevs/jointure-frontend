// ChipComponent.js
import React from 'react';
import { Chip } from '@mui/material';

const CustomChip = ({ backgroundColor, label }) => {
  return (
    <Chip
      sx={{
        backgroundColor: backgroundColor,
        fontWeight: 600,
        px: '0.75rem',
        py: '1rem'
      }}
      label={label}
      size="small"
    />
  );
};

export default CustomChip;
