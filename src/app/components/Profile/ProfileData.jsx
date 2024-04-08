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

        const [companyName, setCompanyName] = useState(""); // Estado para almacenar el nombre de la empresa
    
        useEffect(() => {
            // Función asincrónica para obtener el nombre de la empresa
            const fetchCompanyName = async () => {
                try {
                    const profileData = await getProfileById(userId); // Llama a la función getProfileById
                    setCompanyName(profileData.companyName); // Establece el nombre de la empresa en el estado
                } catch (error) {
                    console.error("Error al obtener el nombre de la empresa:", error);
                }
            };
    
            fetchCompanyName(); // Llama a la función para obtener el nombre de la empresa
        }, []); // Ejecuta la llamada solo una vez al montar el componente


    return (

            <Container className="flex min-h-auto flex-col items-center justify-between p-8">
                <Typography variant="h2" className="text-center">
                    Mi perfil
                </Typography>
                <Box className="flex h-auto flex-row items-start justify-around pt-8">
                    <Box className="pt-5 p-8">
                        <Image
                            src="/img/pet-shop.jpg"
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
                                            Nombre de la Empresa
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
                                                {companyName}
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
                                                Barcelona
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
                                            Descripción y valores
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
                                                Comercio
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
                                                Empresa
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
            </Container>

    );
}
