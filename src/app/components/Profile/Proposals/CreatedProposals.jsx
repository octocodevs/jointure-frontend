'use client'
import React from 'react'
import { Box, Grid } from '@mui/material'
import ProposalCard from '../../ProposalCards/ProposalCard';
import { useState,useEffect } from 'react';
import { getMyCollaborations } from '../../../../../services/axios';


export default function CreatedProposals () {

  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await getMyCollaborations();
        console.log(response);
        setCards(response);
      }catch(error){
        console.error('Error fetching data:', error);
      }
    } 
    fetchData();
  }, []);

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem',
            }}>
            <Grid container>
              {cards.map(card => (
                <Grid key={card.id} xs={12} md={6} lg={4}>
                  <Box sx={{ padding: '1rem' }}>
                    <ProposalCard card={card} />
                  </Box>
                </Grid>
              ))} 
            </Grid>
        </Box>
  )
}

