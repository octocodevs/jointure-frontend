import InfoButton from '@/app/components/Buttons/InfoButton'
import { Container, Typography } from '@mui/material'
import React from 'react'

export default function CreateProfile() {
  return (
    <Container>
        <Typography variant='h1' justifyContent='center'>
            Crear perfil de empresa
        </Typography>
        <InfoButton/>
    </Container>
  )
}
