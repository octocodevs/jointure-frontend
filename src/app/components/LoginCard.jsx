import React from 'react';
import { Box } from '@mui/material';

const LoginCard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/img/img-login.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '727px', 
        width: '600px',
        marginLeft: '21.9%',
        
      }}
    />
  );
};

export default LoginCard;