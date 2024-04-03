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
/*           title={card.title}
 */        />
        <Box
          alignItems="left"
          className="flex flex-row gap-2 items-start pl-4 pb-2"
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
/*             label={card.collab_type}
 */            size="small"
          />
        </Box>
        <CardContent>
          <Typography
            variant="h5" 
            className="pl-1"
            sx={{
              fontSize: '16px',
              fontWeight: 700
            }}
            >
{/*               {card.title}
 */}            </Typography>
          <Typography variant="body2" className="px-1">
{/*             {card.description}
 */}          </Typography>
        </CardContent>
        <Box
          sx={{
            paddingBottom: 1,
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
