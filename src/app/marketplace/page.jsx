import { Container, Typography } from '@mui/material'
import React from 'react'
import CollabCard from '../components/CollabCard'
import ResponsiveDrawer from '../components/Navigation/ResponsiveDrawer.jsx'

export default function Marketplace() {
  return (
    <ResponsiveDrawer>
        <Container maxWidth="sm">
            <Typography variant="h5" className='pb-8'>Marketplace
            </Typography>
            <CollabCard />
        </Container>    
    </ResponsiveDrawer>    
  )
}
