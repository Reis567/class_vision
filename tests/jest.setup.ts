import supertest, { Agent } from 'supertest';
import initializeApp from '../src/index';

let testServer: Agent;

beforeAll(async () => {
  const app = await initializeApp;
  testServer = supertest.agent(app);
});

export { testServer };
