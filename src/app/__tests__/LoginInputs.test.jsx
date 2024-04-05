import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginInputs from '../components/LoginInputs';
import { useRouter } from 'next/navigation';
import 'jest-localstorage-mock';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('LoginInputs component', () => {
  it('should show error messages when form is submitted with empty fields', async () => {
   
    useRouter.mockReturnValue({});

    
    const { getByLabelText, getByText, queryByText } = render(<LoginInputs />);
    
    fireEvent.click(getByText('Enviar'));

    await waitFor(() => {
      expect(getByText('El correo electrónico es obligatorio')).toBeInTheDocument();
      expect(getByText('La contraseña es obligatoria')).toBeInTheDocument();
      expect(getByText('Por favor, acepta los términos y condiciones')).toBeInTheDocument();
    });

    fireEvent.change(getByLabelText('E-mail'), { target: { value: 'test@example.com' }});
    fireEvent.change(getByLabelText('Contraseña'), { target: { value: 'password' }});
    fireEvent.click(getByLabelText('Acepto las condiciones y la privacidad'));
    fireEvent.click(getByText('Enviar'));


    await waitFor(() => {
      expect(queryByText('El correo electrónico es obligatorio')).toBeNull();
      expect(queryByText('La contraseña es obligatoria')).toBeNull();
      expect(queryByText('Por favor, acepta los términos y condiciones')).toBeNull();
    });
  });
});