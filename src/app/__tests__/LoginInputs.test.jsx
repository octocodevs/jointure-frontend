import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginInputs from '../../componentes/LoginInputs';

// Creamos un mock de useRouter
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('LoginInputs', () => {
  test('debería mostrar mensajes de error cuando se envía el formulario con campos vacíos', () => {
    const { getByLabelText, getByText } = render(<LoginInputs />);
    
    // Simular un clic en el botón de enviar
    fireEvent.click(getByText('Ingresar'));

    // Obtener los elementos que muestran los mensajes de error
    const emailError = getByText('Por favor ingresa tu correo electrónico');
    const passwordError = getByText('Por favor ingresa tu contraseña');

    // Verificar que los mensajes de error estén presentes en el DOM
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});