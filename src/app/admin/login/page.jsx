import React from "react";
import LoginInputs from "@/app/components/LoginInputs";
import { Box } from "@mui/material";
import LoginCard from "@/app/components/LoginCard";
import LockIcon from "@/app/components/mui/Icons/LockIcon";

const Login = () => {
  return (
    <Box className="flex justify-center items-center">
      <Box className="md:w-1/2 mb-12 flex justify-center items-center flex-col">
        <Box display="flex" alignItems="center" justifyContent="center">
          <LockIcon />
        </Box>
        <Box className="text-3xl font-bold text-center ">
          Iniciar sesión
        </Box>
        <LoginInputs />
      </Box>
      <Box className="hidden sm:block h-scrip:w-1/2">
        <LoginCard />
      </Box>
    </Box>
  );
};

export default Login;
