import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/errorHandler';

export const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/api/users', userRoutes);

  app.get('/health', (req, res) => {
    res.json({ status: 'OK', service: 'user-service' });
  });

  app.use(errorHandler);

  return app;
};