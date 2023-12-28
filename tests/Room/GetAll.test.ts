import { testServer } from "../jest.setup";

describe('Testes de integração', () => {
  it('Deve retornar status 200 para a rota raiz', async () => {
    const response = await testServer.get('/');
    expect(response.status).toBe(200);
  });

});
