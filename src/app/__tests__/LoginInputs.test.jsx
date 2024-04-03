import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axiosMock from 'axios-mock-adapter';
import LoginInputs from '../LoginInputs';
import { loginUser } from '../../../services/axios'; // Suponiendo que esta es tu función para iniciar sesión

describe('LoginInputs', () => {
  let axiosMockInstance;

  beforeEach(() => {
    axiosMockInstance = new axiosMock();
  });

  afterEach(() => {
    axiosMockInstance.restore();
  });

  it('should submit form with valid data', async () => {
    axiosMockInstance.onGet('/sanctum/csrf-cookie').reply(200);
    axiosMockInstance.onPost('/login').reply(200, { success: true });

    const { getByLabelText, getByText } = render(<LoginInputs />);

    fireEvent.change(getByLabelText('E-mail'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Contraseña'), { target: { value: 'password' } });
    fireEvent.click(getByLabelText('Acepto las condiciones y la privacidad'));

    fireEvent.submit(getByText('Iniciar sesión'));

    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password',
        agree: true
      });
    });
  });

  // Añade más pruebas según sea necesario para cubrir otros casos de uso
});