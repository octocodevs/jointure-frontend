import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as api from '../../../../services/axios';

describe('Funciones de Axios', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  describe('registerNewUser', () => {
    it('debería registrar un nuevo usuario exitosamente', async () => {
      const userData = { username: 'usuario', password: 'contraseña' };
      const responseData = { id: 1, ...userData };
      mock.onPost('api/register').reply(200, responseData);

      const newUser = await api.registerNewUser(userData);

      expect(newUser).toEqual(responseData);
    });
  });

  describe('loginUser', () => {
    it('debería iniciar sesión exitosamente', async () => {
      const userData = { username: 'usuario', password: 'contraseña' };
      const responseData = { token: 'token_de_prueba', ...userData };
      mock.onPost('api/login').reply(200, responseData);

      const user = await api.loginUser(userData);

      expect(user).toEqual(responseData);
    });
  });

  describe('logoutUser', () => {
    it('debería manejar errores al cerrar sesión', async () => {
      mock.onPost('api/logout').reply(500);

      await expect(api.logoutUser()).rejects.toThrow();
    });
  });

  describe('createCollaboration', () => {
    it('debería crear una colaboración exitosamente', async () => {
      const collaborationData = { title: 'Colaboración', description: 'Descripción de la colaboración' };
      const authToken = 'token_de_prueba';
      const responseData = { id: 1, ...collaborationData };
      mock.onPost('api/marketplace').reply(200, responseData);

      const newCollaboration = await api.createCollaboration(collaborationData, authToken);

      expect(newCollaboration).toEqual(responseData);
    });

    it('debería manejar errores al crear una colaboración', async () => {
      const collaborationData = { title: 'Colaboración', description: 'Descripción de la colaboración' };
      const authToken = 'token_de_prueba';
      mock.onPost('api/marketplace').reply(500);

      await expect(api.createCollaboration(collaborationData, authToken)).rejects.toThrow();
    });
  });

  describe('deleteCollaboration', () => {
    it('debería eliminar una colaboración exitosamente', async () => {
      const collaborationId = 1;
      const authToken = 'token_de_prueba';
      mock.onDelete(`api/marketplace/${collaborationId}`).reply(200);

      const response = await api.deleteCollaboration(collaborationId, authToken);

      expect(response).toEqual(undefined);
    });

    it('debería manejar errores al eliminar una colaboración', async () => {
      const collaborationId = 1;
      const authToken = 'token_de_prueba';
      mock.onDelete(`api/marketplace/${collaborationId}`).reply(500);

      await expect(api.deleteCollaboration(collaborationId, authToken)).rejects.toThrow();
    });
  });

  describe('getCollaborations', () => {
    it('debería obtener colaboraciones exitosamente', async () => {
      const responseData = [{ id: 1, titulo: 'Colaboración 1' }];
      mock.onGet('api/collaboration-proposals').reply(200, { data: responseData });

      const collaborations = await api.getCollaborations();

      expect(collaborations).toEqual(responseData);
    });
  });

  describe('getprofiles', () => {
    it('debería obtener perfiles exitosamente', async () => {
      const responseData = [{ id: 1, username: 'usuario1' }, { id: 2, username: 'usuario2' }];
      mock.onGet('api/profile').reply(200, responseData);

      const profiles = await api.getprofiles();

      expect(profiles).toEqual(responseData);
    });
  });
});