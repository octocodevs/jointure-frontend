import { Container, Typography } from '@mui/material'
import React from 'react'
import { Email, PhoneRounded, ChatBubble, VideoCallRounded } from "@mui/icons-material";
import OptionList from '@/app/components/Mui/inputs/OptionList';
import OptionsSection from '@/app/components/InfoForms/OptionsSection';



export default function CreateProfileForm() {


    const [cif, setCif] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [legalStructure, setLegalStructure] = useState('');
    const [activity, setActivity] = useState('');
    const [businessSize, setBusinessSize] = useState('');
    const [market, setMarket] = useState('');
    const [clients, setClients] = useState('');




    const handleCifChange = (event) => {
        setCif(event.target.value);
        console.log("CIF:", event.target.value);
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
                        label="Nombre"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required
                        onChange={(e) => setName(e.target.value)}
                        onClick={()=> console.log('nombre añadido')}
                        error={nameError}
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
