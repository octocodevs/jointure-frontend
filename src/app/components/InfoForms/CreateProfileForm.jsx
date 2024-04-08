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
    const [socailX, setsocialX] = useState('');
    const [facebook, setFacebook] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [spotify, setSpotify] = useState('');
    const [youtube, setYoutube] = useState('');
    const [pinterest, setPinterest] = useState('');


    // handleSubmit code not completed yet
    const handleSubmit = async () => {


      const profileData = {
          CIF: cifValue,
          phone: phone,
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
