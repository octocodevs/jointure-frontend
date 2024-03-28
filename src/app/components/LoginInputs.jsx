"use client"
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { TextField, Checkbox,FormControlLabel, Box} from '@mui/material';



const LoginInputs = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'agree' ? checked : value,
    }));
  };

  return (
    <form className="max-w-md mx-auto mt-8 px-4">
      <div className="flex flex-col items-center">
        <TextField
          fullWidth
          margin="normal"
          label="Nombre de usuario"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ width: 600, height: 56 }}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: 600, height: 56 }}
        />
      </div>
      <Box display="flex" justifyContent="center">
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
          className="text-gray-700"
        />
      </Box>
    </form>
  );
};

export default LoginInputs;