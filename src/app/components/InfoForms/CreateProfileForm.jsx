"use client"

import { Container, TextField, Box, Button, MenuItem, Grid } from '@mui/material';
import React, { useState } from 'react';
import ImageUpload from '../Buttons/ImageUpload';
import axios from 'axios';
import { useAuthContext } from '@/contexts/authContext';
import { createNewProfile } from '../../../../services/axios';
import { useRouter } from 'next/navigation';




export default function CreateProfileForm() {

  const [image, setImage] = useState('');
  const [cifValue, setCifValue] = useState('');
  const [legalStructure, setLegalStructure] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMail, setContactMail] = useState('');
  const [sector, setSector] = useState('');
  const [activity, setActivity] = useState('');
  const [values, setValues] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [market, setMarket] = useState('');
  const [clients, setClients] = useState('');
  const [salesChannels, setSalesChannels] = useState('');
  const [description, setDescription] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [socialX, setSocialX] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const router = useRouter();

  const legalStructureOptions = [
    {
      value: 'Autónomo/a',
      label: 'Autónomo/a',
    },
    {
      value: 'Comunidad de bienes',
      label: 'Comunidad de bienes',
    },
    {
      value: 'Sociedad Limitada (S. L.)',
      label: 'Sociedad Limitada (S. L.)',
    },
    {
      value: 'Sociedad Limitada Laboral (S. L. L.)',
      label: 'Sociedad Limitada Laboral (S. L. L.)',
    },
    {
      value: 'Sociedad Anónima (S. A.)',
      label: 'Sociedad Anónima (S. A.)',
    },
    {
      value: 'Sociedad Anónima Laboral (SAL)',
      label: 'Sociedad Anónima Laboral (SAL)',
    },
    {
      value: 'Sociedad Limitada Nueva Empresa (S. L. N. E.)',
      label: 'Sociedad Limitada Nueva Empresa (S. L. N. E.)',
    },
  ];

  const sectorOptions = [
    {
      value: 'Alimentación y bebidas',
      label: 'Alimentación y bebidas',
    },
    {
      value: 'Viajes',
      label: 'Viajes',
    },
    {
      value: 'Familia',
      label: 'Familia',
    },
    {
      value: 'Entretenimiento',
      label: 'Entretenimiento',
    },
    {
      value: 'Belleza',
      label: 'Belleza',
    },
    {
      value: 'Educación',
      label: 'Educación',
    },
    {
      value: 'Salud',
      label: 'Salud',
    },
    {
      value: 'Tecnología',
      label: 'Tecnología',
    },
    {
      value: 'Música',
      label: 'Música',
    },
    {
      value: 'Hogar',
      label: 'Hogar',
    },
    {
      value: 'Horeca',
      label: 'Horeca',
    },
    {
      value: 'Mascotas',
      label: 'Mascotas',
    },
    {
      value: 'Deportes',
      label: 'Deportes',
    },
    {
      value: 'Arte y cultura',
      label: 'Arte y cultura',
    },
    {
      value: 'Motor',
      label: 'Motor',
    },
    {
      value: 'Moda',
      label: 'Moda',
    },
    {
      value: 'Sin ánimo de lucro',
      label: 'Sin ánimo de lucro',
    },
    {
      value: 'Retail',
      label: 'Retail',
    },
    {
      value: 'Juguetes',
      label: 'Juguetes',
    },
    {
      value: 'Mobiliario',
      label: 'Mobiliario',
    },
    {
      value: 'Servicios profesionales',
      label: 'Servicios profesionales',
    },
    {
      value: 'Otros',
      label: 'Otros',
    },
  ]

  const BusinessSizeOptions = [
    {
      value: 'micro empresa',
      label: 'Micro empresa',
    },
    {
      value: 'pequeña empresa',
      label: 'Pequeña empresa',
    },
    {
      value: 'mediana empresa',
      label: 'Mediana empresa',
    },
    {
      value: 'gran empresa',
      label: 'Gran empresa',
    },
  ]

  const ChannelOptions = [
    {
      value: 'online',
      label: 'Online',
    },
    {
      value: 'offline',
      label: 'Tienda física',
    },
    {
      value: 'ambos',
      label: 'Ambos',
    },
  ]

  const MarketOptions = [
    {
      value: 'Local',
      label: 'Local',
    },
    {
      value: 'Comarcal',
      label: 'Comarcal',
    },
    {
      value: 'Provincial',
      label: 'Provincial',
    },
    {
      value: 'Autonómico',
      label: 'Autonómico',
    },
    {
      value: 'Nacional',
      label: 'Nacional',
    },
    {
      value: 'Internacional',
      label: 'Internacional',
    },

  ]

  const ClientsOptions = [
    {
      value: 'B2B',
      label: 'B2B',
    },
    {
      value: 'B2C',
      label: 'B2C',
    },
    {
      value: 'B2B y B2C',
      label: 'Ambos',
    },
  ]


  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const profileData = new FormData();

    profileData.append('CIF', cifValue);
    profileData.append('legal_structure', legalStructure);
    profileData.append('phone_number', phone);
    profileData.append('email_contact', contactMail);
    profileData.append('sector', sector);
    profileData.append('activity', activity);
    profileData.append('values', values);
    profileData.append('business_size', businessSize);
    profileData.append('market', market);
    profileData.append('clients', clients);
    profileData.append('sales_channels', salesChannels);
    profileData.append('description', description);
    profileData.append('social_network_instagram', instagram);
    profileData.append('social_network_linkedin', linkedin);
    profileData.append('social_network_x', socialX);
    profileData.append('social_network_tiktok', tiktok);

    
    profileData.append('image', image);

    createNewProfile(profileData)
      .then((res) => {
        router.push("/admin")
      })
      .catch((error) => {
        console.error('Create profile failed', error);
      })
  }


  return (
    <Container className='mt-8'>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box className="mb-6">
          <TextField
            sx={{
              margin: '1rem',
            }}
            id="image"
            label="sube tu imagen"
            type="file"
            fullWidth
            required
            variant="outlined"
            color="primary"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setImage(e.target.files[0])}

          />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="cif"
              label="CIF"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              onChange={(e) => setCifValue(e.target.value)}
              helperText={formSubmitted && !cifValue ? "Escribe tu CIF" : ""}
              error={formSubmitted && !cifValue}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              className="m-4"
              id="phone_number"
              label="Número de teléfono"
              variant="outlined"
              color="primary"
              fullWidth
              required
              helperText={formSubmitted && !phone ? "Escribe tu número de teléfono" : ""}
              error={formSubmitted && !phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="email_contact"
          label="E-mail de contacto"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => setContactMail(e.target.value)}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="social_network_instagram"
              label="Instagram"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setInstagram(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="social_network_tiktok"
              label="TikTok"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setTiktok(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="social_network_x"
              label="X"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setSocialX(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="social_network_linkedin"
              label="LinkedIn"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </Grid>
        </Grid>


        <TextField
          sx={{
            margin: '1rem',
          }}
          id="description"
          label="Descripción"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="legal_structure"
              select
              required
              label="Estructura legal"
              helperText={formSubmitted && !legalStructure ? "Selecciona la estructura legal de tu empresa" : ""}
              error={formSubmitted && !legalStructure}
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setLegalStructure(e.target.value)}
            >
              {legalStructureOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="sector"
              select
              required
              label="Sector"
              helperText={formSubmitted && !sector ? "Selecciona el sector al que pertenece tu empresa" : ""}
              error={formSubmitted && !sector}
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setSector(e.target.value)}
            >
              {sectorOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="activity"
          label="Actividad"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => setActivity(e.target.value)}
        />

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="values"
          label="Valores"
          variant="outlined"
          color="secondary"
          fullWidth
          onChange={(e) => setValues(e.target.value)}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="business_size"
              select
              required
              label="Tamaño de la empresa"
              helperText={formSubmitted && !businessSize ? "Selecciona el tamaño de tu empresa" : ""}
              error={formSubmitted && !businessSize}
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setBusinessSize(e.target.value)}
            >
              {BusinessSizeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="market"
              select
              label="Mercado"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setMarket(e.target.value)}
            >
              {MarketOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="sales_channel"
              select
              required
              label="Canal de venta"
              helperText={formSubmitted && !salesChannels ? "Selecciona el canal de venta de tu empresa" : ""}
              error={formSubmitted && !salesChannels}
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setSalesChannels(e.target.value)}
            >
              {ChannelOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              sx={{
                margin: '1rem',
              }}
              id="clients"
              select
              required
              label="Clientes"
              helperText={formSubmitted && !clients ? "Selecciona el modelo de clientes de tu empresa" : ""}
              error={formSubmitted && !clients}
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => setClients(e.target.value)}
            >
              {ClientsOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            margin: 'auto',
            marginTop: 6,
            marginBottom: 8,
            display: 'block'
          }}         >
          GUARDAR
        </Button>

      </form>
    </Container>
  )
}