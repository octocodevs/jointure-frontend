'use client';

import styled from "@emotion/styled";
import { Chip, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ResponsiveDrawer from "../Navigation/ResponsiveDrawer.jsx";



export default function DetailProposalCard() {
  const Img = styled('img')({
    width: 200,
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  });

  
  
  return (
    <ResponsiveDrawer>
      <Typography variant="h2" className="text-center">
        Propuesta de colaboración
      </Typography>
      <Paper
      sx={{
        display: 'flex',
        mt: 5,
        alignItems: 'center',
        gap: 2,
        overflow: 'hidden',
      }}
      >
        <Img src="/img/croissants.jpg" alt="croissants" />
        <Box>
          <Typography variant="h6">Cafetería Delicious</Typography>
          <Typography variant="body1">Colaboremos</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta
            fugit, quibusdam, quod, quos dolorum voluptate quas magnam
            exercitationem quia molestias. Quisquam, quas. Quisquam, quas.
          </Typography>
          <Box
        alignItems="left"
        className="flex flex-row gap-2 items-start pl-4 pb-4"
      >
        <Chip
          sx={{
            backgroundColor: '#2EE09F'
          }}          
          label="Alimentación"
          size="small"
          variant="outlined"
          
        />
        <Chip
          sx={{
            backgroundColor: '#06ABDC'
          }} 
          label="Co-branding"
          size="small"
        />
      </Box>
        </Box>
        
      </Paper>

    </ResponsiveDrawer>
  )
}
