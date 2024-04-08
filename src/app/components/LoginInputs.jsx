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

    if (Object.keys(errorMessages).length > 0) {
      return;
    }

    try {
      await axios.get("/sanctum/csrf-cookie");
      const res = await loginUser(formData);
      route.push("/admin");
      route.refresh();
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrorMessages(error.response.data.errors);
      } else {
        setErrorMessages({ general: "Email o contraseña incorrecto" });
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            marginTop: 6,
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            label="E-mail"
            name="email"
            id="email"
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
            id="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errorMessages.password}
            helperText={errorMessages.password}
          />
          <Box>
            <FormControl
              error={!!errorMessages.agree}
              sx={{ display: "flex", alignItems: "" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="agree"
                    id="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                }
                label="Acepto las condiciones y la privacidad"
                variant="body1"
                sx={{
                  marginTop: 2,
                  marginLeft: 0.5,
                  marginBottom: 1,
                }}
              />
              {errorMessages.agree && (
                <FormHelperText>{errorMessages.agree}</FormHelperText>
              )}
            </FormControl>
          </Box>
        </Box>

        <Box>
          <LargeButton type="submit" id="submit"/>
        </Box>
      </form>

      <Box mt={2}>
        {errorMessages.general && (
          <Typography variant="body2" color="error">
            {errorMessages.general}
          </Typography>
        )}
        <Typography variant="body1" color="textSecondary">
          ¿No estás registrado?{" "}
          <Link
            href="/admin/register"
            color="secudary"
            className="text-[#46A9B6] font-bold"
          >
            Regístrate aquí
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginInputs;