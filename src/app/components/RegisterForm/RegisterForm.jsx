'use client'
import { useState, useEffect, useContext } from "react";
import LargeInput from "@/app/components/mui/inputs/LargeInput";
import SmallInput from "../mui/inputs/SmallInput";
import CheckboxLabels from "../mui/inputs/Checkbox";
import LargeButton from '../Buttons/LargeButton';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicSelect from "../mui/inputs/BasicSelect";
import LockIcon from "../mui/Icons/LockIcon";
import Link from "next/link";
import axios from "axios";
import { registerNewUser, getprofiles } from "../../../../services/axios";
import { useRouter } from "next/navigation";
import { Container } from "@mui/material"




export default function RegisterForm() {
 
  const router = useRouter()

  const [nameValue, setNameValue] = useState('');
  // const [lastNameValue, setLastNameValue] = useState('');
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
    console.log("Name:", event.target.value);
  };

  // const handleLastNameChange = (event) => {
  //   setLastNameValue(event.target.value);
  //   console.log("Last Name:", event.target.value);
  // };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    console.log("Email:", event.target.value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPasswordValue(value);

    if (value.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
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

  const handlePositionChange = (event) => {
    setPositionValue(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompanyValue(event.target.value);
  };

  // const handleClick = () => {
  //   console.log("botón clickado");
  // };

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

    // const profies =  await getprofiles()
    console.log('data', userData);
    // console.log('profies', profies);

    axios.get('/sanctum/csrf-cookie').then(response => {
      registerNewUser(userData).then((res) =>{
        
        router.push("/");
        router.refresh()
      })
      .catch ((error) =>{
        console.error('Login failed:', error);
        
      })
    })
    // try {
    //   console.log('Registro:', response);

    //   const response = await registerNewUser(userData);

    //   console.log('Registro exitoso:', response);
    //   // Aquí podrías redirigir al usuario a otra página o realizar otras acciones
    // } catch (error) {
    //   console.error('Error al registrar:', error);
    //   // Aquí podrías manejar el error y mostrar un mensaje al usuario
    // }
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
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center">
        <LockIcon />
      </Box>
      <h1 className="font-bold mt-4 text-4xl" variant="h5">Registro</h1>
      <FormControl onSubmit={handleSubmit} >

        <Box className="mt-2">
          <LargeInput
            id="name"
            label="Nombre"
            variant="outlined"
            value={nameValue}
            onChange={handleNameChange}
            type="text"
          />
          <LargeInput
            id="email"
            label="Email"
            variant="outlined"
            value={emailValue}
            onChange={handleEmailChange}
            type="email"
          />
          <LargeInput
            id="password"
            label="Contraseña"
            variant="outlined"
            value={passwordValue}
            onChange={handlePasswordChange}
            type="password"
          />
          <LargeInput
            id="password_confirmation"
            label="Repite tu contraseña"
            variant="outlined"
            value={confirmPasswordValue}
            onChange={handleConfirmPasswordChange}
            type="password"
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
          />
        </Box>

        <Box className="flex flex-col justify-between gap-6  ml-1">
          <Box width="100%">
            <LargeInput
              id="position"
              label="cargo"
              variant="outlined"
              value={positionValue}
              onChange={handlePositionChange}
              type="text"
              className="mr-3"
            />
          </Box>
          <Box width="100%">
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
          </Box>
        </Box>

        <Box className="flex flex-col mt-2 ml-3 gap-2 justify-between">
          <Box width="100%">
            <BasicSelect
              id="country"
              label="País"
              value={country}
              onChange={setCountry}
              options={[
                { value: 'España', label: 'España' },
                { value: 'Francia', label: 'Francia' },
                { value: 'Italia', label: 'Italia' },
              ]}
              sx={{
                '& .MuiInputLabel-root': { color: 'red' },
                '& .MuiSelect-root': { backgroundColor: 'lightblue' },
              }}
            />
          </Box>
          <Box>
            <LargeInput
              id="business_name"
              label="Nombre de la empresa"
              variant="outlined"
              value={companyValue}
              onChange={handleCompanyChange}
              type="text"
            />
          </Box>
        </Box>

        <Box className="mt-2 ">
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
        </Box>

        <Box className="mt-2">
          <LargeButton
            onClick={handleButtonClick}
          />
        </Box>

      </FormControl>

      <Box className="mt-2">
        <Typography
          className="mt-2 font-montserrat"
          variant="body1">
          ¿Ya tienes una cuenta?
          <Link href="/admin/login">
            <span className="text-[#46A9B6] font-montserrat">
              Inicia sesión aquí
            </span>
          </Link>

        </Typography>
      </Box>
    </Container>
  );
}