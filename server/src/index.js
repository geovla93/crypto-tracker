import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import coinRoutes from './routes/coin.routes.js';

async function main() {
  const port = process.env.PORT ?? 8080;
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev'));
  app.use('/coins', coinRoutes);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
main();
