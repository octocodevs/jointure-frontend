"use client"

import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import { Box, Typography } from '@mui/material';

export default function Form() {
  return (
        <Grid className=''>
            <Typography variant="h6">Iniciar sesión</Typography>
            <form 
                noValidate
                autoComplete="off"
            >
                <Box className="pt-4 flex flex-row gap-6">
                    <TextField
                        className="w-[48%] mb-4"
                        label="Nombre"
                        variant="outlined"
                        color="secondary"
                        placeholder='Nombre'
                        onClick={()=> console.log('nombre añadido')}
                    />
                    <TextField
                        className="w-[48%] mb-4"
                        label="Apellido(s)"
                        variant="outlined"
                        color="secondary"
                        placeholder='Apellido(s)'
                        onClick={()=> console.log('apellido añadido')}
                    />
                </Box>
                <TextField
                    className="w-full mb-4"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    placeholder='Apellido(s)'
                    onClick={()=> console.log('email añadido')}
                />
                <TextField
                    className="w-full mb-2"
                    label="Contraseña"
                    variant="outlined"
                    color="secondary"
                    placeholder='Contraseña'
                    onClick={()=> console.log('contraseña añadido')}
                />
            </form>
        </Grid>
  )
}
