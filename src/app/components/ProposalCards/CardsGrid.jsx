"use client"

import { Box, Grid } from '@mui/material'
import React from 'react'
import ProposalCard from './ProposalCard'
import { useState, useEffect } from 'react'
import { getCollaborations } from '../../../../services/axios'
import Spinner from '../../components/Spinner'

export default function CardsGrid() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCollaborations();
        setCards(response);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <Grid container>
          {cards.map((card) => (
            <Grid key={card.id} xs={12} md={6} lg={4}>
              <Box sx={{ padding: '1rem' }}>
                <ProposalCard card={card} />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
