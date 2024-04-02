import Link from "next/link";
import React from "react";
import LoginInputs from "@/app/components/LoginInputs";
import { Box } from "@mui/material";
import LoginCard from "@/app/components/LoginCard";
import LockIcon from "@/app/components/mui/Icons/LockIcon";

const Login = () => {
  return (
    <Box className="flex justify-center items-center">
      <Box className="md:w-1/2 mt-24 flex justify-center items-center flex-col">
        <Box display="flex" alignItems="center" justifyContent="center">
          <LockIcon />
        </Box>
        <Box className="text-3xl font-bold text-center mb-12 ml-10rem">
          Iniciar sesión
        </Box>
        <LoginInputs />
      </Box>
      <Box className="hidden sm:block md:w-1/2">
        <LoginCard />
      </Box>
    </Box>
  );
};

export default Login;
