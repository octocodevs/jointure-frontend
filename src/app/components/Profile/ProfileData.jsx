'use client'
import * as React from 'react';
import { Box, Container, Typography } from '@mui/material'
import ResponsiveDrawer from '@/app/components/Navigation/ResponsiveDrawer.jsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';

import { useState, useEffect } from 'react';
import { getProfileById } from '../../../../services/axios'


export default function ProfileData() {
        
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                // Obtener el userId del usuario autenticado desde las cookies
                const userId = getUserIdFromCookies(); // Implementa esta función según tu lógica de manejo de cookies

                // Obtener los datos del perfil del usuario actual
                const data = await getProfileById(userId);
                setProfileData(data);
            } catch (error) {
                console.error('Error al obtener los datos del perfil:', error);
            }
        };

        fetchProfileData();
    }, []);

    return (

            <Container className="flex min-h-auto flex-col items-center justify-between p-8">
                <Typography variant="h2" className="text-center">
                    Mi perfil
                </Typography>
                {profileData && (
                <Box className="flex h-auto flex-row items-start justify-around pt-8">
                    <Box className="pt-5 p-8">
                        <Image
                            src={profileData.image}
                            alt="Next.js Image"
                            width={300}
                            height={300}
                            className='bg-cover h-full'
                        />
                    </Box>

                    <Box>
                        <List
                            sx={{
                                width: "100%",
                                maxWidth: 360,
                                bgcolor: "background.paper",
                            }}
                        >
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        <Typography variant="h3">
                                            Nombre de la empresa
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                {profileData.business_name}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={<Typography variant="h3">Ubicación</Typography>}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                {profileData.user.country}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        <Typography variant="h3">
                                            {profileData.description}
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Duis aliquam sit amet velit vel accumsan.
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Box>
                        <List
                            sx={{
                                width: "100%",
                                maxWidth: 360,
                                bgcolor: "background.paper",
                            }}
                        >
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        <Typography variant="h3">
                                            Sector
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                {profileData.sector}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        <Typography variant="h3">
                                            Tipo de negocio
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                {profileData.legal_structure}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        <Typography variant="h3">
                                            Redes sociales
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{
                                                    display: "inline",
                                                }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                <FacebookIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                                                <InstagramIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                                                <WhatsAppIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                                                <GoogleIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                                                <XIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                )}
            </Container>

    );
}
