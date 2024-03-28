import React from 'react';
import { Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LockIcon = ({ color = '#ffffff' }) => {
  return (
    <Box
      sx={{
        width: 35,
        height: 37,
        backgroundColor: '#46A9B6',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-55rem'
      }}
    >
      <LockOutlinedIcon sx={{ fontSize: 25, color }} />
    </Box>
  );
};

export default LockIcon;