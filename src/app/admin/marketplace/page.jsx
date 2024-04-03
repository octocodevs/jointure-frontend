"use client"

import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CollabCard from '../../components/CollabCard'
import ResponsiveDrawer from '../../components/Navigation/ResponsiveDrawer.jsx.jsx'
import { useState, useEffect } from 'react'
import { getCollaborations } from '../../../../services/axios'
import axios from 'axios'

export default function Marketplace() {

  const [cards, setCards] = useState([]);
  
console.log('link', process.env.API_URL)

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get("api/collaboration-proposals");

/*         const response = await axios.get(`${process.env.URL_API}/api/collaboration-proposals`);
 */        console.log(response)
        setCards(response.data.data);
      }catch(error){
        console.error('Error fetching data:', error);
      }
      
      /* .then(response => {
        console.log('Response from server:', response.data.data);
      })
      .catch(error => {
      }); 
      return data; */
    } 
    fetchData();
  }, []);

  return (
    <ResponsiveDrawer>
        <Box sx={{
        display: 'flex'
            }}>
            <Typography variant="h5" className='pb-8'>Marketplace
            </Typography>
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
