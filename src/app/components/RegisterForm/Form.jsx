"use client"

import TextField from '@mui/material/TextField';
import { Container, Typography, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { React, useState } from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FormLabel, FormControl } from '@mui/material';
import { useRouter } from 'next/navigation';
import Snackbar from '@mui/material/Snackbar';

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

    const [open, setOpen] = useState(false); // Estado para la visibilidad del Snackbar

    const handleSubmitAndOpenSnackbar = async (e) => {
        e.preventDefault()
        setNameError(false)
        setEmailError(false)
        setSurnameError(false)

        if (name === '') {
            setNameError(true)
        }
        if (surname === '') {
            setSurnameError(true)
        }
        if (email === '') {
            setEmailError(true)
        }

        if (name && surname && email) {
            try {
                const response = await fetch('http://localhost:8000/notes', {
                    method: 'POST',
                    headers: { "Content-type": "application/json" },

                    body: JSON.stringify({ name, surname, email, password, description, category })
                })
                console.log(response.ok)
                if (response.ok) {
                    
                    setOpen(true); // Abrir el Snackbar en caso de envío exitoso
                    setTimeout(() => setOpen(false), 3000); // Cerrar el Snackbar después de 3 segundos
                    router.push('/notes');
                } else {
                    console.error('Error:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    const submitButton = React.useRef();

    return (
        <Container >
            <Typography variant="h2">Iniciar sesión</Typography>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmitAndOpenSnackbar}
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
                    onClick={() => console.log('nombre añadido')}
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
                    onClick={() => console.log('apellido añadido')}
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
                    onClick={() => console.log('email añadido')}
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
                    onClick={() => console.log('contraseña añadido')}
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
                    onClick={() => console.log('descripción añadido')}
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
                    type="submit"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRight />}
                    onClick={handleSubmitAndOpenSnackbar}
                >
                    Submit
                </Button>

                {/* Remove the Alert component */}

                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    autoHideDuration={3000} // Close automatically after 3 seconds
                    onClose={() => setOpen(false)}
                    message="¡Registro exitoso!" // Replace with your success message
                />
            </form>
        </Container>
    )
}
