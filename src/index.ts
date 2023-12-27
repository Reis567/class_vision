import express from 'express';
import { AppDataSource } from './data-source';
import { routes } from './routes';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(routes);

  const port = process.env.PORT || 3000;

  const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

  // Adicione um listener para o evento 'close' para imprimir uma mensagem ao encerrar o servidor
  server.on('close', () => {
    console.log('Server closed');
  });

  return server;
});
