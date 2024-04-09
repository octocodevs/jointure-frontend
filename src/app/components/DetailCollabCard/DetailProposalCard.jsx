'use client';

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCollaborationById } from '../../../../services/axios.js';
import styled from "@emotion/styled";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomChip from "../Buttons/CustomChip.jsx";



export default function DetailProposalCard() {

  const [data, setData] = useState(null);

  const pathname = usePathname().split("/");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCollaborationById(pathname[3]);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(pathname[3]);
  }, []);


 
  const Img = styled('img')({
    width: 320,
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  });

  
  
  return (
    <Container className="flex min-h-auto flex-col items-center justify-between p-8">

      <>
      <Typography variant="h2" className="">
        Propuesta de colaboración
      </Typography>
      <Paper
      sx={{
        
        width: '100%',
        display: 'flex',
        mt: 5,
        alignItems: 'center',
        gap: 2,
        overflow: 'hidden',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
      >
      <Img src="/img/donuts-logo.jpg" alt="croissants" />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
            <Typography variant="h4">{data && data.brand}</Typography>
            <Typography variant="h5">{data && data.title}</Typography>
            <Typography variant="body1">
              {data && data.description}
            </Typography>

          <Box
          alignItems="left"
          className="flex flex-row gap-2 items-start justify-start"
        >
        <CustomChip backgroundColor="#2EE09F" label={data && data.user && data.user.profile && data.user.profile.sector} />
        <CustomChip backgroundColor="#06ABDC" label={data && data.collab_type} />
        </Box>
      </Box>
        
      </Paper>
      </>
      </Container>
  )
}
