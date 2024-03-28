import React from 'react';
import LoginInputs from '@/app/components/LoginInputs';
import LoginButton from '@/app/components/Buttons/LoginButton';
import { Box, Container, Typography } from '@mui/material';
const Login = () => {
  return (
    <>
      <Container className="flex items-start justify-start">
        <Box className="w-1/2"> 
        <Typography variant="h4" className="font-bold text-center mb-20">Iniciar sesión</Typography>
          <LoginInputs />
          <LoginButton />
        </Box>
      </Container>
    </>
  );
};

export default Login;