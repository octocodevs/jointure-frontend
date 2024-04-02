""
import React from 'react';
import LoginInputs from '@/app/components/LoginInputs';
import { Box, Typography } from '@mui/material';
import LoginCard from '@/app/components/LoginCard'; 
import LockIcon from '../components/mui/Icons/LockIcon';

const Login = () => {
  return (
    <Box className="flex items-start justify-start">
      <Box className="w-1/2 mt-24"> 
      <Box display="flex" alignItems="center" justifyContent="center">
          <LockIcon />
        </Box>
        <Typography variant = "h5" className="font-bold text-center mb-12 ml-10rem">Iniciar sesión</Typography>
        <LoginInputs />
      </Box>
      <Box className="w-1/2">
        <LoginCard />
      </Box>
    </Box>
  );
};

export default Login;