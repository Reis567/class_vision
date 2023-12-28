import 'express-async-errors';
import express from 'express';
import { AppDataSource } from './data-source';
import { routes } from './routes';
import { ErrorMiddleware } from './middlewares/Error';

const initializeApp = async () => {
  await AppDataSource.initialize();

  const app = express();

  app.use(express.json());
  app.use(routes);
  app.use(ErrorMiddleware);

  const port = process.env.PORT || 3000;

  const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
  server.on('close', () => {
    console.log('Server closed');
  });

  return app;
};

export default initializeApp();
