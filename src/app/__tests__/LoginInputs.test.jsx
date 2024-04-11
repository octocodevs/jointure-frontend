import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, } from "@testing-library/react";
import LoginInputs from "../components/LoginInputs.jsx";
import axios from "axios";



jest.mock('axios', () => ({
  defaults: {
    baseURL: 'http://localhost:8000/',
    withCredentials: true,
  },
  post: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const loginMock = jest.fn();
jest.mock('../../contexts/authContext', () => ({
  useAuthContext: () => ({
    login: loginMock,
  }),
}));
describe('LoginInputs', () => {
  it('renderiza correctamente', () => {
    const { getByLabelText, getByText } = render(<LoginInputs />);
    
    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Contraseña')).toBeInTheDocument();
    expect(getByLabelText('Acepto las condiciones y la privacidad')).toBeInTheDocument();
    expect(getByText('Enviar')).toBeInTheDocument();
    expect(getByText('¿No estás registrado?')).toBeInTheDocument();
  });

  it('muestra mensajes de error al enviar un formulario vacío', async () => {
    const { getByLabelText, getByText } = render(<LoginInputs />);
    const submitButton = getByText('Enviar');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('El correo electrónico es obligatorio')).toBeInTheDocument();
      expect(getByText('La contraseña es obligatoria')).toBeInTheDocument();
      expect(getByText('Por favor, acepta los términos y condiciones')).toBeInTheDocument();
    });
  });

  it('muestra un mensaje de error general cuando falla el inicio de sesión', async () => {
    axios.post.mockRejectedValueOnce({ response: { data: { errors: { general: 'Email o contraseña incorrecto' } } } });
    const { getByLabelText, getByText } = render(<LoginInputs />);
    const submitButton = getByText('Enviar');

    fireEvent.change(getByLabelText('E-mail'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Contraseña'), { target: { value: 'password' } });
    fireEvent.click(getByLabelText('Acepto las condiciones y la privacidad'));
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Email o contraseña incorrecto')).toBeInTheDocument();
    });
  });
}); 