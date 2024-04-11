import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor, } from '@testing-library/react';
import NewCollabForm from '../components/NewCollabForm/NewCollabForm'; 
import axios from "axios";

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

jest.mock('axios');

describe('NewCollabForm', () => {
  it('should submit the form with valid data', async () => {
    const { getByLabelText, getByText } = render(<NewCollabForm />);

    
    fireEvent.change(getByLabelText('Nombre de la marca'), { target: { value: 'MiMarca' } });
    fireEvent.change(getByLabelText('Título'), { target: { value: 'MiTítulo' } });
  


    fireEvent.click(getByText('Enviar'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('localhost:8000', expect.any(FormData));
    });

  
    expect(window.location.pathname).toBe('/admin');
  });

  it('should display errors for invalid data', async () => {
    const { getByText } = render(<NewCollabForm />);

    fireEvent.click(getByText('Enviar'));

    await waitFor(() => {
      expect(getByText('Campo requerido')).toBeInTheDocument();
    });

    expect(axios.post).not.toHaveBeenCalled();
  });

  it('should handle API errors gracefully', async () => {
    axios.post.mockRejectedValueOnce({ response: { data: { errors: ['Error de la API'] } } });

    const { getByText } = render(<NewCollabForm />);

 
    fireEvent.click(getByText('Enviar'));


    await waitFor(() => {
      expect(getByText('Error de la API')).toBeInTheDocument();
    });

    expect(window.location.pathname).not.toBe('/admin');
  });
});