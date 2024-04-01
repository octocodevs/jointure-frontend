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
} from "@mui/material";


export default function CollabCard() {
  return (
    <Card className="max-w-xs h-auto">
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
        title="Brand"
      />
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
      <Typography variant="h6" className="text-bold pl-4">Colaboración</Typography>
      <Typography variant="body2" className="px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta
        voluptas ad omnis dolorum laborum modi illum facilis aliquid eligendi
        odit?
      </Typography>
      <Button
        sx={{
          margin: 2
        }}
        className="flex flex-row items-start pb-8"
        variant="contained"
        color="primary"
        size="small"
      >
        Ver más
      </Button>
    </Card>
  );
}
