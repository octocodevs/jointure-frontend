"use client";
import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Container, Typography}
from "@mui/material";
import Link from "next/link";
import LoginButton from "./Buttons/LoginButton";

const LoginInputs = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "agree" ? checked : value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <TextField
          fullWidth
          margin="normal"
          label="E-mail"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
          }
          label="Acepto las condiciones y la privacidad"
          className="text-gray-700 mt-4"
        />
      </Box>

      <Box >
        <Link href="admin/marketplace">
          <LoginButton />
        </Link>
      </Box>

      
<Box mt={2}>
  <Typography variant="body2" color="textSecondary">
    ¿No estás registrado?{' '}
    <Link href="/admin/register" 
      color="primary" 
      className="font-bold underline" 
      style={{ fontFamily: 'inherit' }} >
      Regístrate aquí
    </Link>
  </Typography>
</Box>

    </Container>
  );
};

export default LoginInputs;
