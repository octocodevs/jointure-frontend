import Link from 'next/link';
import React from 'react';
import LoginInputs from '@/app/components/LoginInputs';
import { Box } from '@mui/material';
import LoginCard from '@/app/components/LoginCard'; 
import LockIcon from '../components/Mui/Incons/LockIcon';

const Login = () => {
  return (
    <Box className="flex items-start justify-start">
      <Box className="w-1/2 mt-24"> 
      <Box display="flex" alignItems="center" justifyContent="center">
          <LockIcon />
        </Box>
        <Box className="text-3xl font-bold text-center mb-12 ml-10rem">Iniciar sesión</Box>
        <LoginInputs />
      </Box>
      <Box className="w-1/2">
        <LoginCard />
      </Box>
    </Box>
  );
};

export default Login;