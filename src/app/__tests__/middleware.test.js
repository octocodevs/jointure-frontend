import { createMocks } from 'node-mocks-http';
import { middleware} from '../../middleware';
import fetch, { Request, Response } from 'node-fetch';

global.fetch = fetch;
global.Request = Request;
global.Response = Response;

describe('Middleware de autenticación', () => {
  test('Redirecciona a la raíz si intenta acceder a /admin sin autenticación', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      url: '/admin/some-path',
    });
    await middleware(req, res);
    expect(res._getStatusCode()).toBe(307); 
    expect(res._getRedirectUrl()).toBe('/');
  });

  test('No redirecciona si hay un token de autenticación y se accede a /admin', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      url: '/admin/some-path',
      headers: {
        cookie: 'laravel_session=token',
      },
    });
    await middleware(req, res);
    expect(res._getStatusCode()).not.toBe(307);
  });

  test('No redirecciona si se accede a /login sin autenticación', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      url: '/login',
    });
    await middleware(req, res);
    expect(res._getStatusCode()).not.toBe(307);
  });
});