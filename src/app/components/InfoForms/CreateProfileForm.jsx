"use client"

import { Container, Typography, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function CreateProfileForm() {

    const [image, setImage] = useState ('');
    const [cifValue, setCifValue] = useState('');
    const [legalStructure, setLegalStructure] = useState('');
    const [phone, setPhone] = useState('');
    const [contactMail, setContactMail] = useState ('');
    const [sector, setSector] = useState ('');
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
    const [facebook, setFacebook] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [spotify, setSpotify] = useState('');
    const [youtube, setYoutube] = useState('');
    const [pinterest, setPinterest] = useState('');


    // handleSubmit code not completed yet
    const handleSubmit = async () => {


      const profileData = {
          image: image,  
          CIF: cifValue,
          legal_structure: legalStructure,
          phone_number: phone,
          email_contact: contactMail,
          sector: sector,
          activity: activity,
          values: values,
          business_size: businessSize,
          market: market,
          clients: clients,
          sales_channels: salesChannels,
          description: description,
          social_network_instagram: instagram,
          social_network_linkedin: linkedin,
          social_network_x: socialX,
          social_network_facebook: facebook,
          social_network_tiktok: tiktok,
          social_network_spotify: spotify,
          social_network_youtube: youtube,
          social_network_pinterest: pinterest,

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
        <Typography variant='h1' color="primary" justifyContent='center'>
            Crear perfil de empresa
        </Typography>

        <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="cif"
                    label="CIF"
                    variant="outlined"
                    color="secondary"
                    required
                    onChange={handleCifChange}
                    value={cif}
                />

<TextField
                        sx={{
                            margin: '1rem',
                        }}
                        className="m-4"                        
                        label="Número de teléfono"
                        variant="outlined"
                        color="primary"
                        required
                        onChange={(e) => setName(e.target.value)}
/*                         error={phoneError}
 */                    />
        
        <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="description"
                    label="Descripción"
                    
                    variant="outlined"
                    color="secondary"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={cif}
                />

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
