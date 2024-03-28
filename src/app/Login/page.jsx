import Link from 'next/link';
import React from 'react';
import LoginInputs from '@/componentes/LoginInputs';
import LoginButton from '@/componentes/mui/Buttons/LoginButton';
import { Box } from '@mui/material';
import LoginCard from '@/componentes/LoginCard';
import LockIcon from  '../../componentes/mui/Incons/LockIcon'; 

const Login = () => {
  return (
    <Box className="flex items-start justify-start">
      <Box className="w-1/2 mt-24"> 
        <Box className="text-3xl font-bold text-center mb-12 ml-12rem">Iniciar sesión</Box>
        <LoginInputs />
        <Link href="admin/marketplace" passHref>
        <LoginButton />
        </Link>
        <Box display="flex" alignItems="center" justifyContent="center">
          <LockIcon /> 
        </Box>
      </Box>
      <Box className="w-1/2">
        <LoginCard />
      </Box>
    </Box>
  );
};

export default Login;