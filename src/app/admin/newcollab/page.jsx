import ResponsiveDrawer from '@/app/components/Navigation/ResponsiveDrawer.jsx';
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function NewCollab(){
    return (
        <ResponsiveDrawer>
          <Container className="flex min-h-screen flex-col items-center justify-between p-24">
            <Typography variant="h1" className="text-red-600">Propuesta de Colaboración</Typography>
          </Container>
        </ResponsiveDrawer>
      );
}
