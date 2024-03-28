import { Container, Typography } from '@mui/material'
import React from 'react'
import CollabCard from '../components/CollabCard'

export default function Marketplace() {
  return (
        <Container className='pt-4 pb-8'>
            <Typography variant="h5" className='pb-8'>Marketplace
            </Typography>
            <CollabCard />
        </Container>        
  )
}
