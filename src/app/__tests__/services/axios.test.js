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
  
    describe('getCollaborations', () => {
      it('debería obtener colaboraciones exitosamente', async () => {
        const datosRespuesta = [{ id: 1, titulo: 'Colaboración 1' }];
        mock.onGet('api/collaboration-proposals').reply(200, { data: datosRespuesta });
  
        const colaboraciones = await api.getCollaborations();
  
        expect(colaboraciones).toEqual(datosRespuesta);
      });
    });
  
    describe('registerNewUser', () => {
      it('debería registrar un nuevo usuario exitosamente', async () => {
        const userData = { username: 'usuario', password: 'contraseña' };
        mock.onPost('api/register').reply(200, { id: 1, ...userData });
  
        const newUser = await api.registerNewUser(userData);
  
        expect(newUser).toEqual({ id: 1, ...userData });
      });
    });
  
    describe('loginUser', () => {
      it('debería iniciar sesión exitosamente', async () => {
        const userData = { username: 'usuario', password: 'contraseña' };
        mock.onPost('api/login').reply(200, { token: 'token_de_prueba', ...userData });
  
        const user = await api.loginUser(userData);
  
        expect(user).toEqual({ token: 'token_de_prueba', ...userData });
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
        mock.onPost('/api/marketplace').reply(200, { id: 1, ...collaborationData });
  
        const newCollaboration = await api.createCollaboration(collaborationData, authToken);
  
        expect(newCollaboration).toEqual({ id: 1, ...collaborationData });
      });
    });
  
    describe('updateCollaboration', () => {
      it('debería actualizar una colaboración exitosamente', async () => {
        const collaborationId = 1;
        const collaborationData = { title: 'Colaboración actualizada', description: 'Descripción actualizada' };
        mock.onPost(`/api/marketplace/${collaborationId}`).reply(200, { id: collaborationId, ...collaborationData });
  
        const updatedCollaboration = await api.updateCollaboration(collaborationId, collaborationData);
  
        expect(updatedCollaboration).toEqual({ id: collaborationId, ...collaborationData });
      });
    });
  
    describe('deleteCollaboration', () => {
      it('debería eliminar una colaboración exitosamente', async () => {
        const collaborationId = 1;
        mock.onDelete(`/api/marketplace/${collaborationId}`).reply(200);
  
        const response = await api.deleteCollaboration(collaborationId);
  
        expect(response).toEqual(undefined);
      });
    });
  });