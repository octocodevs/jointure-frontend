"use client"

import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CollabCard from '../../components/CollabCard'
import ResponsiveDrawer from '../../components/Navigation/ResponsiveDrawer.jsx.jsx'
import { useState, useEffect } from 'react'
import { getCollaborations } from '../../../../services/axios'
import axios from 'axios'

export default function Marketplace() {

  const [cards, setCards] = useState();
  
  useEffect(() => {
     await axios.get('/api/collaboration-proposals')
      .then(response => {
        console.log('Response from server:', response.data);
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ResponsiveDrawer>
        <Box sx={{
        display: 'flex'
            }}>
            <Typography variant="h5" className='pb-8'>Marketplace
            </Typography>
            {/* <Grid container spacing={3}>
              {cards.map(card => (
                <Grid item key={card.id} xs={12} md={6}>
                  <CollabCard card={card}/>
                </Grid>
              ))} 
            </Grid> */}
            <CollabCard />
        </Box>    
    </ResponsiveDrawer>    
  )
}
