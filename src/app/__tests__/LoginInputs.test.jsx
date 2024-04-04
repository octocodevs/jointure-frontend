import "@testing-library/jest-dom";
import LoginInputs from '../components/LoginInputs';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

describe('LoginInputs component', () => {
  test('should display error messages when form is submitted with empty fields', async () => {
    const { getByLabelText, getByText } = render(<LoginInputs />);

    // Simular envío del formulario vacío
    fireEvent.click(getByText('Ingresar'));

    // Esperar a que se muestren los mensajes de error
    await waitFor(() => {
      expect(getByText('El correo electrónico es obligatorio')).toBeInTheDocument();
      expect(getByText('La contraseña es obligatoria')).toBeInTheDocument();
      expect(getByText('Por favor, acepta los términos y condiciones')).toBeInTheDocument();
    });
  });

  // Otros casos de prueba aquí...
});