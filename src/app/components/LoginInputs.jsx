"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Container,
  Typography,
  FormControl,
  FormHelperText,
} from "@mui/material";
import Link from "next/link";
import LoginButton from "./Buttons/LoginButton";
import LargeButton from "./Buttons/LargeButton";
import axios from "axios";
import { loginUser } from "../../../services/axios";
import { useRouter } from "next/navigation";

const LoginInputs = () => {
  const route = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agree: false,
  });
  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "agree" ? checked : value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, agree } = formData;

    // Reinicia los mensajes de error
    setErrorMessages({});

    if (!email) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: "El correo electrónico es obligatorio",
      }));
    }

    if (!password) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        password: "La contraseña es obligatoria",
      }));
    }

    if (!agree) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        agree: "Por favor, acepta los términos y condiciones",
      }));
    }

    // Si hay errores, no procede con el envío del formulario
    if (Object.keys(errorMessages).length > 0) {
      return;
    }

    axios.get("/sanctum/csrf-cookie").then(() => {
      loginUser(formData)
        .then((res) => {
          route.push("/");
          route.refresh();
        })
        .catch((error) => {
          console.log(error.response);
          if (error.response && error.response.data && error.response.data.errors) {
            setErrorMessages(error.response.data.errors);
          } else {
            setErrorMessages({ general: "Email o contraseña incorrecto" });
          }
        });
    });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            label="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errorMessages.email}
            helperText={errorMessages.email}
          />
          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errorMessages.password}
            helperText={errorMessages.password}
          />
          <FormControl error={!!errorMessages.agree}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
              }
              label="Acepto las condiciones y la privacidad"
              className="text-gray-700 mt-4"
            />
            {errorMessages.agree && <FormHelperText>{errorMessages.agree}</FormHelperText>}
          </FormControl>
        </Box>

        <Box>
          <LargeButton type="submit" />
        </Box>
      </form>

      <Box mt={2}>
        {errorMessages.general && (
          <Typography variant="body2" color="error">
            {errorMessages.general}
          </Typography>
        )}
        <Typography variant="body2" color="textSecondary">
          ¿No estás registrado?{" "}
          <Link
            href="/admin/register"
            color="primary"
            className="font-bold underline"
            style={{ fontFamily: "inherit" }}
          >
            Regístrate aquí
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginInputs;