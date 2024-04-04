import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginInputs from "./LoginInputs";
import axios from "axios";

jest.mock("axios");

describe("LoginInputs Component Integration Test", () => {
  it("Iniciar sesión con credenciales válidas", async () => {
    const mockResponse = { data: { access_token: "token_de_prueba" } };
    axios.get.mockResolvedValueOnce(mockResponse);

    const { getByLabelText, getByText, queryByText } = render(<LoginInputs />);

    fireEvent.change(getByLabelText("E-mail"), {
      target: { value: "correo@ejemplo.com" },
    });

    fireEvent.change(getByLabelText("Contraseña"), {
      target: { value: "contraseña123" },
    });

    fireEvent.click(getByText("Aceptar"));

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("/sanctum/csrf-cookie");
      expect(axios.post).toHaveBeenCalledWith("/login", {
        email: "correo@ejemplo.com",
        password: "contraseña123",
        agree: false, // Suponiendo que por defecto el checkbox no está marcado
      });

      // Aquí puedes agregar más expectativas según lo que se espera que haga el componente después de iniciar sesión
    });
  });
})