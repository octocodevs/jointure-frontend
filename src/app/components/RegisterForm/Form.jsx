"use client"

import TextField from '@mui/material/TextField';
import { Container, Typography, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { React, useState } from 'react';   
import { KeyboardArrowRight } from '@mui/icons-material';
import { FormLabel, FormControl } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Form() {

const router = useRouter()

const [name, setName] = useState('')
const [surname, setSurname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [description, setDescription] = useState('')
const [category, setCategory] = useState('autonomo')

const [nameError, setNameError] = useState(false)
const [surnameError, setSurnameError] = useState(false)
const [emailError, setEmailError] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false)
    setEmailError(false)
    setSurnameError(false)

    if (name == '') {
        setNameError(true)
    }
    if (surname == '') {
        setSurnameError(true)
    }
    if (email == '') {
        setEmailError(true)
    }
    if (name && surname && email) {
        console.log(name, surname, email, description, category)
        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({ name, surname, email, password, description, category })
        }).then(() => router.push('/notes'))
    }
}

  return (
        <Container>
            <Typography variant="h2">Iniciar sesión</Typography>
            <form 
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        label="Nombre"
                        variant="outlined"
                        color="primary"
                        fullidth
                        required
                        onChange={(e) => setName(e.target.value)}
                        onClick={()=> console.log('nombre añadido')}
                        error={nameError}
                    />
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        label="Apellido(s)"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required
                        onChange={(e) => setSurname(e.target.value)}
                        onClick={()=> console.log('apellido añadido')}
                        error={surnameError}
                    />
                
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    label="Email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={()=> console.log('email añadido')}
                    error={emailError}

                />
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    label="Contraseña"
                    type="password"
                    fullWidth
                    required
                    variant="outlined"
                    color="primary"
                    onChange={(e) => setPassword(e.target.value)}
                    onClick={()=> console.log('contraseña añadido')}
                />

                <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        label="Descripción de la propuesta"
                        placeholder="Cuentanos más sobre tu propuesta"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        multiline
                        rows={4}
                        onChange={(e) => setDescription(e.target.value)}
                        onClick={()=> console.log('descripción añadido')}
                    />
            <FormControl 
                sx={{
                    margin: '1rem',
                    display: 'block',
                    }}>
                <FormLabel>Business Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel control={<Radio />} label="Autonomo" value="autonomo" />
                    <FormControlLabel control={<Radio />} label="S.L." value="sl" />
                    <FormControlLabel control={<Radio />} label="S.A" value="sa" />
                </RadioGroup>
            </FormControl>
            <Button
                onClick={() => console.log('submit info')}
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRight />}
            >
                Submit
            </Button>

                
            </form>
        </Container>
  )
}
