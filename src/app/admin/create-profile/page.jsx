import { Container, Typography, Button } from '@mui/material'
import React from 'react'
import CreateProfileForm from '@/app/components/InfoForms/CreateProfileForm'

export default function CreateProfile() {
  return (
    <Container>
      <form>
        <Typography variant='h1' color="primary" justifyContent='center'>
            Crear perfil de empresa
        </Typography>
        <CreateProfileForm />

        
        <Button
          type="submit"
          color="primary"
          text="guardar"
          text-uppercase
          ></Button>
      </form>
    </Container>
  )
}
