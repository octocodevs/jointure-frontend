'use client'
import { useState,useEffect } from "react";
import LargeInput from "@/componentes/Mui/inputs/LargeInput";
import SmallInput from "../Mui/inputs/SmallInput";
import CheckboxLabels from "../Mui/inputs/Checkbox";
import LargeButton from '../Mui/Buttons/LargeButton';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BoxBasic from "../Mui/shapes/LockerShape";
import BasicSelect from "../Mui/inputs/BasicSelect";


export default function RegisterForm() {
  // useState inputs
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [formError, setFormError] = useState(false);
  const [country, setCountry] = useState('');

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
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

  //



  return (
    <Box
      className="flex justify-center items-center flex-col mt-4 w-1/2 "
    >
      <BoxBasic className="w-full" />
      <Typography className="font-montserrat font-bold mt-4" variant="h5">Registro</Typography>
      <FormControl>

        <Box className="flex flex-row mt-2 justify justify-between gap-5">
          <SmallInput
            id="name"
            label="Nombre"
            variant="outlined"
            value={nameValue}
            onChange={handleNameChange}
            type="text"
          />
          <SmallInput
            id="lastname"
            label="Apellido"
            variant="outlined"
            value={lastNameValue}
            onChange={handleLastNameChange}
            type="text"
          />
        </Box>

        <Box className="mt-2">
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
              id="confirmPassword"
              label="Repite tu contraseña"
              variant="outlined"
              value={confirmPasswordValue}
              onChange={handleConfirmPasswordChange}
              type="password"
              error={Boolean(confirmPasswordError)}
              helperText={confirmPasswordError}
          />
        </Box>

        <Box className="flex flex-row mt-2 gap-5">
          <SmallInput />
          <SmallInput />
        </Box>

        <Box className="flex flex-row mt-2 gap-5">
          <SmallInput />
          <BasicSelect
            id="country"
            label="País"
            value={country}
            onChange={setCountry}
            options={[
              { value: 10, label: 'España' },
              { value: 20, label: 'Francia' },
              { value: 30, label: 'Italia' },
            ]}
            sx={{
              '& .MuiInputLabel-root': { color: 'red' },
              '& .MuiSelect-root': { backgroundColor: 'lightblue' },
            }}
          />
        </Box>

        <Box className="mt-2">
          <LargeInput 
          
          />
          <CheckboxLabels />
        </Box>

        <Box className="mt-2">
          <LargeButton />
        </Box>

      </FormControl>

      <Box className="mt-2">
        <Typography
          className="mt-2 font-montserrat"
          variant="body1">
          ¿Ya tienes una cuenta?
          <span className="text-[#46A9B6] font-montserrat">
            Inicia sesión aquí
          </span>
        </Typography>
      </Box>
    </Box>
  );
}