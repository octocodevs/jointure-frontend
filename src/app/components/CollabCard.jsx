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
import React from "react";
import Image from "next/image";

export default function CollabCard() {
  return (
    <Card className="max-w-xs h-auto">
      <CardMedia className="" title="">
        <Image
          src={"/images/croissants.jpg"}
          width={360}
          height={400}
          objectFit="contain" // or objectFit="cover"
        />
      </CardMedia>
      <CardHeader 
        avatar={
            <Avatar 
                alt="logo"
                src="/images/donuts-logo.jpg"
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
          label="Co-branding"
          size="small"
          className="bg-blue hover:bg-blue-dark"
        />
        <Chip
          label="Chip Outlined"
          size="small"
          variant="outlined"
          className="bg-green hover:bg-green-dark"
        />
      </Box>
      <Typography variant="h6" className="text-bold pl-4">Colaboración</Typography>
      <Typography variant="body2" className="px-4 pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta
        voluptas ad omnis dolorum laborum modi illum facilis aliquid eligendi
        odit?
      </Typography>
      <Button
        className="bg-teal hover:bg-teal-dark text-white ml-4 mb-4 flex flex-row items-start"
        variant="contained"
        size="small"
      >
        Ver más
      </Button>
    </Card>
  );
}
