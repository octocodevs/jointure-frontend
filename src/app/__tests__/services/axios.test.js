import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as api from "../../../../services/axios";

const mock = new MockAdapter(axios);

describe('Funciones de la API', () => {
  afterEach(() => {
    mock.reset();
  });

  it('debería registrar un nuevo usuario correctamente', async () => {
    const userData = {
      nombre: 'John Doe',
      email: 'john@example.com',
      contraseña: 'contraseña123',
    };
    const responseMock = { mensaje: 'Usuario registrado correctamente' };
    mock.onPost('api/register', userData).reply(200, responseMock);

    const result = await api.registerNewUser(userData);
    expect(result).toEqual(responseMock);
  });

  it('debería iniciar sesión de un usuario correctamente', async () => {
    const userData = {
      email: 'john@example.com',
      contraseña: 'contraseña123',
    };
    const responseMock = { access_token: 'token123' };
    mock.onPost('api/login', userData).reply(200, responseMock);

    const result = await api.loginUser(userData);
    expect(result).toEqual(responseMock);
  });

  it('debería obtener todos los perfiles correctamente', async () => {
    const profiles = [
      { id: 1, nombre: 'John Doe' },
      { id: 2, nombre: 'Jane Doe' }
    ];
    mock.onGet('api/profile').reply(200, profiles);

    const result = await api.getProfiles();
    expect(result).toEqual(profiles);
  });

  it('debería obtener un perfil por ID correctamente', async () => {
    const userId = 1;
    const profile = { id: userId, nombre: 'John Doe' };
    mock.onGet(`api/profile/${userId}`).reply(200, profile);

    const result = await api.getProfileById(userId);
    expect(result).toEqual(profile);
  });

});