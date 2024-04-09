import { Container, Typography, Button } from '@mui/material'
import React from 'react'
import CreateProfileForm from '@/app/components/InfoForms/CreateProfileForm'
import ImageUpload from '@/app/components/Buttons/ImageUpload'

export default function CreateProfile() {
  return (
    <Container>
      
        <Typography variant='h1' color="primary" justifyContent='center'>
            Crear perfil de empresa
        </Typography>
        
        <CreateProfileForm />

         
    </Container>
  )
}
