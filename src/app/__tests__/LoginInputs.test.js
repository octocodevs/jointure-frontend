import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import LoginInputs from '../components/LoginInputs';
import 'jest-localstorage-mock';

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para las expectativas personalizadas
import LoginInputs from './LoginInputs'; // Asegúrate de proporcionar la ruta correcta

// Mock de useRouter para simular el comportamiento del enrutador de Next.js
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
  }),
}));

// Mock de loginUser para simular el comportamiento de la función de login
jest.mock('../../../services/axios', () => ({
  loginUser: jest.fn(),
}));

describe('LoginInputs Component', () => {
  it('should display input fields and a submit button', () => {
    const { getByLabelText, getByText } = render(<LoginInputs />);
    
    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Contraseña')).toBeInTheDocument();
    expect(getByText('Acepto las condiciones y la privacidad')).toBeInTheDocument();
    expect(getByText('Aceptar')).toBeInTheDocument();
  });

  it('should validate input fields and display error messages', async () => {
    const { getByText } = render(<LoginInputs />);
    
    fireEvent.click(getByText('Aceptar')); // Intenta enviar el formulario sin completar campos

    await waitFor(() => {
      expect(getByText('El correo electrónico es obligatorio')).toBeInTheDocument();
      expect(getByText('La contraseña es obligatoria')).toBeInTheDocument();
      expect(getByText('Por favor, acepta los términos y condiciones')).toBeInTheDocument();
    });
  });

  it('should submit form with valid credentials', async () => {
    const { getByLabelText, getByText } = render(<LoginInputs />);
    const emailInput = getByLabelText('E-mail');
    const passwordInput = getByLabelText('Contraseña');
    const agreeCheckbox = getByLabelText('Acepto las condiciones y la privacidad');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(agreeCheckbox);
    fireEvent.click(getByText('Aceptar'));

    // Aquí podrías verificar si la función loginUser fue llamada correctamente y si el enrutador fue utilizado para redirigir
    // También podrías verificar si se muestra algún mensaje de error en caso de falla en la autenticación
  });
});