import React from 'react';
import LoginInputs from '@/componentes/LoginInputs';
import LoginButton from '@/componentes/mui/Buttons/LoginButton';

const Login = () => {
  return (
    <>
      <div className="flex items-start justify-start">
      <div className="w-1/2"> 
      <h1 className="text-3xl font-bold text-center mb-40">Iniciar sesión</h1>
        <LoginInputs />
        <LoginButton />
      </div>
    </div>
    </>
  );
};

export default Login;