"use client"

import { Container, TextField, Button, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import OptionList from './OptionList';




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
  const [socialX, setsocialX] = useState('');
  const [tiktok, setTiktok] = useState('');


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


  // handleSubmit code not completed yet
  const handleSubmit = async () => {


    const profileData = {
      CIF: cifValue,
      phone_number: phone,
      email_contact: contactMail,
      legal_structure: legalStructure,
      description: description,
      /* password: passwordValue,
      password_confirmation: confirmPasswordValue,
      position: positionValue,
      business_name: companyValue,
      profile_type: profileValue,
      country: country,
      subscription_type: subscriptionType, */
    };

    axios.get('/sanctum/csrf-cookie').then(response => {
      registerNewProfile(profileData).then((res) => {

        router.push("/admin");
        router.refresh()
      })
        .catch((error) => {
          console.error('Create profile failed:', error);

        })
    })
  };

  return (
    <Container>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >


        <TextField
          sx={{
            margin: '1rem',
          }}
          id="cif"
          label="CIF"
          variant="outlined"
          color="secondary"
          required
          helperText="Escribe tu CIF"
          onChange={(e) => setCifValue(e.target.value)}

        />

        <TextField
          sx={{
            margin: '1rem',
          }}
          className="m-4"
          id="phone_number"
          label="Número de teléfono"
          variant="outlined"
          color="primary"
          required
          helperText="Escribe tu número de teléfono"
          onChange={(e) => setPhone(e.target.value)}
/*                         error={phoneError}
 */                    />

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="email_contact"
          label="E-mail de contacto"
          variant="outlined"
          color="secondary"
          fullWidth
          helperText="Escribe tu e-mail de contacto"
          onChange={(e) => setDescription(e.target.value)}

        />

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="social_network_instagram"
          label="Instagram"
          variant="outlined"
          color="secondary"
          helperText="Escribe el link a tu Instagram"
          onChange={(e) => setInstagram(e.target.value)}

        />

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="social_network_tiktok"
          label="TikTok"
          variant="outlined"
          color="secondary"
          helperText="Escribe el link a tu TikTok"
          onChange={(e) => setTiktok(e.target.value)}

        />
   <br></br>
        <TextField
          sx={{
            margin: '1rem',
          }}
          id="social_network_x"
          label="X"
          variant="outlined"
          color="secondary"
          helperText="Escribe el link a tu X"
          onChange={(e) => setsocialX(e.target.value)}

        />

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="social_network_linkedin"
          label="LinkedIn"
          variant="outlined"
          color="secondary"
          helperText="Escribe el link a tu LinkedIn"
          onChange={(e) => setLinkedin(e.target.value)}

        />

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
          helperText="Escribe la descripción de tu marca"
          onChange={(e) => setDescription(e.target.value)}

        />

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="legal_structure"
          select
          required
          label="Estructura legal"
          helperText="Selecciona la estructura legal de tu empresa"
          variant="outlined"
          color="secondary"
          onChange={(e) => setLegalStructure(e.target.value)}
        >
          {legalStructureOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="sector"
          select
          required
          label="Sector"
          helperText="Selecciona el sector al que pertenece tu empresa"
          variant="outlined"
          color="secondary"
          onChange={(e) => setSector(e.target.value)}
        >
          {sectorOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="activity"
          label="Actividad"
          variant="outlined"
          color="secondary"
          fullWidth
          helperText="Escribe la actividad de tu empresa"
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
          helperText="Lista los valores de tu empresa"
          onChange={(e) => setValues(e.target.value)}

        />

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="business_size"
          select
          required
          label="Tamaño de la empresa"
          helperText="Selecciona el tamaño de tu empresa"
          variant="outlined"
          color="secondary"
          onChange={(e) => setBusinessSize(e.target.value)}
        >
          {BusinessSizeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="market"
          select
          label="Mercado"
          helperText="Selecciona el mercado de tu empresa"
          variant="outlined"
          color="secondary"
          onChange={(e) => setMarket(e.target.value)}
        >
          {MarketOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="sales_channel"
          select
          required
          label="Canal de venta"
          helperText="Selecciona el canal de venta de tu empresa"
          variant="outlined"
          color="secondary"
          onChange={(e) => setXSalesChannels(e.target.value)}
        >
          {ChannelOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{
            margin: '1rem',
          }}
          id="clients"
          select
          required
          label="Clientes"
          helperText="Selecciona el modelo de clientes de tu empresa"
          variant="outlined"
          color="secondary"
          onChange={(e) => setClients(e.target.value)}
        >
          {ClientsOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>




        {/*         <OptionsSection />
 */}
        <Button
          type="submit"
          color="primary"
          text="guardar"
          text-uppercase
        ></Button>
      </form>
    </Container>
  )
}
