import React from "react";
import Image from "next/image";
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Box,
  Button,
  Typography,
  CardContent,
} from "@mui/material";


export default function CollabCard({ card }) {
  if (!card){
    return null
  }

  const lineClamp = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre-wrap',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  };

  return (
    <div>
      <Card elevation={2} className="max-w-xs h-auto">
        <CardMedia>
          <Image
            src={"/img/croissants.jpg"}
            width={360}
            height={400}
            objectFit="cover"
          />
        </CardMedia>
        <CardHeader 
          avatar={
              <Avatar 
                  alt="logo"
                  src="/img/donuts-logo.jpg"
                  variant="rounded"
                  className="mr-2 "
              />
          }
          title={card.title}
          titleTypographyProps={{ 
            sx: {...lineClamp, 
                  fontWeight: 600}
              }}
        />
        <Box
          alignItems="left"
          className="flex flex-wrap gap-2 items-start pl-4 py-2"
        >
          <Chip
            sx={{
              backgroundColor: '#2EE09F',
              fontWeight: 600,
              px: '0.75rem',
              py: '1rem'
            }}          
            label="Alimentación"
            size="small"
            
          />
          <Chip
            sx={{
              backgroundColor: '#06ABDC',
              fontWeight: 600,
              px: '0.75rem',
              py: '1rem'
            }} 
            label={card.collab_type}
            size="small"
          />
        </Box>
        <CardContent className="h-30">
          <Typography
            variant="h5" 
            className="pl-1 line-clamp-1"
            sx={{
              fontSize: '16px',
              fontWeight: 700
            }}
            gutterBottom
            >
              {card.title}
           </Typography>
          <Typography variant="body2" className="px-1 line-clamp-3">
            {card.description}
          </Typography>
        </CardContent>
        <Box
          sx={{
            paddingBottom: 2,
            paddingLeft: 1
          }}>
          <Button
            sx={{
              margin: 1,
            }}
            variant="outlined"
            color="primary"
            size="small"
          >
            Ver más
          </Button>
          <Button
            sx={{
              margin: 1,
            }}
            className="flex flex-row items-start pb-8"
            variant="contained"
            color="primary"
            size="small"
          >
            Gestionar
          </Button>
        </Box>
      </Card>
    </div>
  );
}
