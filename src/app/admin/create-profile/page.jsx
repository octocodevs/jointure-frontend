import { Container, Typography, Button } from '@mui/material'
import React from 'react'
import CreateProfileForm from '@/app/components/InfoForms/CreateProfileForm'

export default function CreateProfile() {
  return (
    <Container>
      
        <Typography 
          variant='h1' color="primary"
          className='pl-10 pt-4'
          sx={{ 
            margin: 'auto',
            display: 'block',
            textAlign: 'center'
            }}>
            Crear perfil de empresa
        </Typography>
        
        <CreateProfileForm />
    </Container>
  )
}
