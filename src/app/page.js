import React from "react";
import LoginInputs from "./components/LoginInputs";
import { Box } from "@mui/material";
import LockIcon from "./components/mui/Icons/LockIcon";
import Image from "next/image";


const Login = () => {
  return (
    <Box className="flex justify-center items-center h-screen">
      <Box className="md:w-1/2 mb-12 flex justify-center items-center flex-col">
        <Box display="flex" alignItems="center" justifyContent="center">
          <LockIcon />
        </Box>
        <Box className="text-3xl font-bold text-center ">
          Iniciar sesión
        </Box>
        <LoginInputs />
      </Box>
      <Box className="hidden sm:block w-full md:w-1/2 h-full relative  overflow-hidden">
      <Image
            src="/img/img-login.png"
            alt="Picture of the author"
            width={1200}
            height={600}
            className="bg-cover h-full"
          />
      </Box>
    </Box>
  );
};

export default Login;
