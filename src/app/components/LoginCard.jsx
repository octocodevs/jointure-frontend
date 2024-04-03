import React from "react";
import { Box } from "@mui/material";

const LoginCard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/img/img-login.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "729px",
        width: "600px",
        marginLeft: "28%"
      }}
    ></Box>
  );
};

export default LoginCard;
