'use client'
import { Box, Container, Typography, Divider } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import { useState, useEffect } from 'react';
import { getProfileById } from '../../../../services/axios';
import { useAuthContext } from '../../../contexts/authContext';
import Spinner from '../../components/Spinner';

export default function ProfileData() {
    // const { getAuthToken } = useAuthContext();
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const user_id = localStorage.getItem( "user_id" );
        if (user_id) {
            getProfileById(user_id).then((res) => {
                console.log("Profile Data: ", res);
                setProfileData(res);
                setIsLoading(false);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, []);

    return (
        <Container className="flex min-h-auto flex-col items-center justify-between p-8">
            <Typography variant="h2" className="text-center">
                Mi perfil
            </Typography>
            {isLoading ? (
                <Spinner />
            ) : profileData ? (
                <Box className="flex h-auto flex-row items-start justify-around pt-8">
                    <Box className="pt-5 p-8">
                        <Image
                            src={`http://localhost:8000/storage/${profileData.image}`}
                            alt="Next.js Image"
                            width={300}
                            height={300}
                            className='bg-cover h-full'
                        />
                    </Box>

                    <Box>
                        <Typography variant="h3">Nombre de la empresa</Typography>
                        <Typography variant="caption">{profileData.user.business_name}</Typography>
                        <Divider variant="inset" component=""/>

                        <Typography variant="h3">Ubicación</Typography>
                        <Typography variant="caption">{profileData.user.country}</Typography>
                        <Divider variant="inset" component="" />

                        <Typography variant="h3">Descripción</Typography>
                        <Typography variant="caption">{profileData.description}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="h3">Sector</Typography>
                        <Typography variant="caption">{profileData.sector}</Typography>
                        <Divider variant="inset" component="" />

                        <Typography variant="h3">Tipo de negocio</Typography>
                        <Typography variant="caption">{profileData.legal_structure}</Typography>
                        <Divider variant="inset" component="" />

                        <Typography variant="h3">Redes sociales</Typography>
                        <Typography variant="caption">
                            <FacebookIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                            <InstagramIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                            <WhatsAppIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                            <GoogleIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                            <XIcon fontSize="medium" sx={{ marginTop: '12px' }} />
                        </Typography>
                    </Box>
                </Box>
            ) : (
                <p>No se pudo cargar el perfil.</p>
            )}
        </Container>
    );
}