"use client"

import { Container, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react'




export default function CreateProfileForm() {


    const [cifValue, setCifValue] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [legalStructure, setLegalStructure] = useState('');
    const [activity, setActivity] = useState('');
    const [businessSize, setBusinessSize] = useState('');
    const [market, setMarket] = useState('');
    const [clients, setClients] = useState('');



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
       

        <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="cif"
                    label="CIF"
                    variant="outlined"
                    color="secondary"
                    required
                    onChange={(e) => setCifValue(e.target.value)}
                   
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
                        onChange={(e) => setPhone(e.target.value)}
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
                    fullWidth
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                    
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
