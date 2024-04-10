"use client"

import TextField from '@mui/material/TextField';
import { Container, Typography, Button, Box, Select, InputLabel, FormControl } from '@mui/material';
import { React, useState, useEffect } from 'react';
import { CheckBox, KeyboardArrowRight } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { registerNewUser} from "../../../../services/axios"
import BasicSelect from '../mui/inputs/BasicSelect';
import CheckboxLabels from '../mui/inputs/Checkbox';
import LockIcon from '../mui/Icons/LockIcon';
import { useAuthContext } from '@/contexts/authContext';



export default function Form() {

    
    const router = useRouter();
    const {login} = useAuthContext()

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [formError, setFormError] = useState(false);
    const [country, setCountry] = useState('');
    const [positionValue, setPositionValue] = useState('');
    const [companyValue, setCompanyValue] = useState('');
    const [profileValue, setProfileValue] = useState('');
    const [subscriptionType, setSubscriptionType] = useState('');

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPasswordValue(value);

        if (value.length < 8) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmPasswordValue(value);

        if (value !== passwordValue) {
            setConfirmPasswordError('Las contraseñas no coinciden');
        } else {
            setConfirmPasswordError('');
        }
    };

    useEffect(() => {
        if (passwordError || confirmPasswordError) {
            setFormError(true);
        } else {
            setFormError(false);
        }
    }, [passwordError, confirmPasswordError]);

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handlePositionChange = (event) => {
        setPositionValue(event.target.value);
    };

    const handleCompanyChange = (event) => {
        setCompanyValue(event.target.value);
    };

    const handleLoginSuccess = (userId) => {
        localStorage.setItem("user_id", userId)
    }

    const handleSubmit = async () => {


        const userData = {
            email: emailValue,
            name: nameValue,
            password: passwordValue,
            password_confirmation: confirmPasswordValue,
            position: positionValue,
            business_name: companyValue,
            profile_type: profileValue,
            country: country,
            subscription_type: subscriptionType,
        };

        
        registerNewUser(userData).then((res) => {
            login(res.access_token);
            handleLoginSuccess(res.user.id);
            router.push("/admin/create-profile");
        })
            .catch((error) => {
                console.error('Login failed:', error);

            })
        
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (!passwordError && !confirmPasswordError) {
            handleSubmit();
        } else {
            setFormError(true);
        }
    };

    return (
        <Container overflow="auto" className='pb-20'>
            <Box className="py-8 pb-4" display="flex" alignItems="center" justifyContent="center">
            <LockIcon />
            </Box>
            <Typography variant="h2" align="center">Registro</Typography>
            <Box className='px-16 pt-12' overflow="auto" >
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="name"
                    label="Nombre"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    onChange={handleNameChange}
                    value={nameValue}
                    
                />
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="email"
                    label="Email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    value={emailValue}
                    onChange={handleEmailChange}
                    
                />

                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="password"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    required
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    

                />
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="password_confirmation"
                    label="Repite tu contraseña"
                    type="password"
                    fullWidth
                    required
                    variant="outlined"
                    color="primary"
                    value={confirmPasswordValue}
                    onChange={handleConfirmPasswordChange}
                    error={Boolean(confirmPasswordError)}
                    helperText={confirmPasswordError}
                    
                />
                <TextField
                    sx={{
                        margin: '1rem',
                    }}
                    id="position"
                    label="Cargo"
                    type="text"
                    fullWidth
                    required
                    variant="outlined"
                    color="primary"
                    value={positionValue}
                    onChange={handlePositionChange}
                    
                />

                    <BasicSelect
                        id="profile_type"
                        label="Perfil de empresa"
                        value={profileValue}
                        onChange={setProfileValue}
                        options={[
                            { value: 'empresa', label: 'Empresa' },
                            { value: 'agencia', label: 'Agencia' },
                            { value: 'freelance', label: 'Freelance' },
                        ]}
                        sx={{
                            '& .MuiInputLabel-root': { color: 'red' },
                            '& .MuiSelect-root': { backgroundColor: 'lightblue' },
                        }}
                        
                    />
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="country"
                        label="País"
                        type="text"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        required
                        onChange={handleCountryChange}
                        value={country}
                    />
                    <TextField
                        sx={{
                            margin: '1rem',
                        }}
                        id="business_name"
                        label="Nombre de la empresa"
                        type="text"
                        fullWidth
                        required
                        variant="outlined"
                        color="primary"
                        value={companyValue}
                        onChange={handleCompanyChange}
                    />
                    <BasicSelect
                        id="subscription_type"
                        label="Tipo de suscripción"
                        value={subscriptionType}
                        onChange={setSubscriptionType}
                        options={[
                            { value: 'basic', label: 'basic' },
                            { value: 'professional', label: 'professional' },
                            { value: 'business', label: 'business' },
                        ]}
                        sx={{
                            '& .MuiInputLabel-root': { color: 'red' },
                            '& .MuiSelect-root': { backgroundColor: 'lightblue' },
                        }}
                    />

                    <CheckboxLabels />
                

                <Box>
                    <Button
                        onClick={handleButtonClick}
                        type="submit"
                        color="primary"
                        variant="contained"
                        endIcon={<KeyboardArrowRight />}
                        fullWidth
                        sx={{ m: 2, }}
                    >
                        Enviar
                    </Button>
                </Box>
            </form>
            </Box>
            <Box>
                <Typography
                    className="text-center"
                    variant="body1">
                    ¿Ya tienes una cuenta?
                    <Link href="/">
                        <span className="text-[#46A9B6] font-bold">
                            Inicia sesión aquí
                        </span>
                    </Link>

                </Typography>
            </Box>
        </Container>
    )
}


