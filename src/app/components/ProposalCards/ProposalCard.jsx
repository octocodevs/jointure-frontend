import React from "react";
import Image from "next/image";
import Link from 'next/link';
import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  Box,
  Button,
  Typography,
  CardContent,
} from "@mui/material";
import CustomChip from "../Buttons/CustomChip";

export default function ProposalCard({ card }) {
  if (!card) {
    return null;
  }

  const URL_IMG = 'http://localhost:8000/storage'

  const lineClamp = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "pre-wrap",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  
  return (
    <div>
      <Card elevation={2} className="max-w-xs h-auto">
        <CardMedia>
          <Image
            src={card.image && (card.image.startsWith('http') ? card.image : `${URL_IMG}/${card.image}`)}
            width={360}
            height={400}
            alt={`Imagen acerca de ${card.brand}`}
            sx={{ objectFit: "cover" }}
            src={ card.image}
          />
        </CardMedia>
        <CardHeader
          avatar={
            <Avatar
              alt="logo"
              src={card.user.profile.image}
              variant="rounded"
              className="mr-2 "
            />
          }
          title={card.brand}
          titleTypographyProps={{
            sx: { ...lineClamp, fontWeight: 600 },
          }}
        />
        <Box
          alignItems="left"
          className="flex flex-wrap gap-2 items-start pl-4 py-2"
        >
          <CustomChip
            backgroundColor="#2EE09F"
            label={card.user.profile && card.user.profile.sector}
          />
          <CustomChip backgroundColor="#06ABDC" label={card.collab_type} />
        </Box>
        <CardContent className="h-32">
          <Typography
            variant="h5"
            className="pl-1 line-clamp-1"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
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
    paddingLeft: 1,
  }}
>
  <Link href={`/admin/proposaldetail/${card.id}`} passHref>
    <Button
      sx={{
        margin: 1,
      }}
      variant="outlined"
      color="primary"
      size="small"
      component="a"
    >
      Ver más
    </Button>
  </Link>
</Box>
      </Card>
    </div>
  );
}
