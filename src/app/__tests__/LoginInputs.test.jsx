import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import LoginInputs from "../components/LoginInputs.jsx";
import { useRouter } from "next/navigation";
import 'jest-localstorage-mock';
import axios from "axios";

jest.mock("axios");

jest.mock("next/navigation");

describe("LoginInputs", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe renderizar correctamente", () => {
    render(<LoginInputs />);
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Acepto las condiciones y la privacidad")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enviar" })).toBeInTheDocument();
  });

  test("debe mostrar mensaje de error si se envía el formulario con campos vacíos", async () => {
    render(<LoginInputs />);
    fireEvent.click(screen.getByText("Enviar"));
    expect(
      screen.getByText("El correo electrónico es obligatorio")
    ).toBeInTheDocument();
    expect(
      screen.getByText("La contraseña es obligatoria")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Por favor, acepta los términos y condiciones")
    ).toBeInTheDocument();
  });

  test("debe mostrar mensaje de error si la autenticación falla", async () => {
    
    axios.get.mockResolvedValueOnce();
  
    axios.post.mockRejectedValueOnce({
      response: {
        data: {
          errors: {
            general: "Email o contraseña incorrecto",
          },
        },
      },
    });
  
    render(<LoginInputs />);
    fireEvent.change(screen.getByLabelText("E-mail"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Contraseña"), {
      target: { value: "password123" },
    });
    fireEvent.click(
      screen.getByLabelText("Acepto las condiciones y la privacidad")
    );
    fireEvent.click(screen.getByText("Enviar"));
  
    // Esperar a que se complete la solicitud
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("api/login", {
        email: "test@example.com",
        password: "password123",
        agree: true,
      });
    });
  
    // Verificar que se muestra el mensaje de error adecuado
    expect(
      screen.getByText("Email o contraseña incorrecto")
    ).toBeInTheDocument();
  });

  test("debe redireccionar al usuario a la página de admin si la autenticación es exitosa", async () => {
    axios.get.mockResolvedValueOnce();

    // Mockear respuesta de axios para la autenticación exitosa
    axios.post.mockResolvedValueOnce();

    const pushMock = jest.fn();
    useRouter.mockReturnValue({
      push: pushMock,
      replace: jest.fn(),
      prefetch: jest.fn(),
      route: "/",
    });

    render(<LoginInputs />);
    fireEvent.change(screen.getByLabelText("E-mail"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Contraseña"), {
      target: { value: "password123" },
    });
    fireEvent.click(
      screen.getByLabelText("Acepto las condiciones y la privacidad")
    );
    fireEvent.click(screen.getByText("Enviar"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("api/login", {
        email: "test@example.com",
        password: "password123",
        agree: true,
      });
    });
  });

  test("debe mostrar mensaje de registro si el usuario no está registrado", async () => {
    render(<LoginInputs />);
    expect(
      screen.getByText("¿No estás registrado?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Regístrate aquí")
    ).toBeInTheDocument();
  });
});