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
    const fetchData = async() => {
      const data = await axios.get('/api/collaboration-proposals')
      .then(response => {
        console.log('Response from server:', response.data.data);
        setCards(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }); 
      return data;
    } 
    fetchData();
  }, []);

console.log('busca cards', cards);

  return (
    <ResponsiveDrawer>
        <Box sx={{
        display: 'flex'
            }}>
            <Typography variant="h5" className='pb-8'>Marketplace
            </Typography>
            <Grid container spacing={3}>
              {cards.map(card => (
                <Grid item key={card.id} xs={12} md={6}>
                  <CollabCard card={card} />
                </Grid>
              ))} 
            </Grid>
            <CollabCard />
        </Box>    
    </ResponsiveDrawer>    
  )
}
