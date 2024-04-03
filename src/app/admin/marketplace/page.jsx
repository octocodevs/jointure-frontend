"use client"

import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CollabCard from '../../components/CollabCard'
import ResponsiveDrawer from '../../components/Navigation/ResponsiveDrawer.jsx.jsx'
import { useState, useEffect } from 'react'
import { getCollaborations } from '../../../../services/axios'

export default function Marketplace() {

  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await getCollaborations();
        setCards(response);
      }catch(error){
        console.error('Error fetching data:', error);
      }
    } 
    fetchData();
  }, []);

  return (
    <ResponsiveDrawer>
        <Box sx={{
        display: 'flex'
            }}>
            <Grid container spacing={3}>
              {cards.map(card => (
                <Grid key={card.id} xs={12} md={6}>
                  <CollabCard card={card} />
                </Grid>
              ))} 
            </Grid>
            <CollabCard />
        </Box>    
    </ResponsiveDrawer>    
  )
}
