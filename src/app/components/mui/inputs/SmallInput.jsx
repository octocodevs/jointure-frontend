'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function SmallInput(props) {
  const { id, label, variant, value, onChange,type } = props;
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id={id}
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      type={type}
      size="small"
      />
    </Box>
  );
}