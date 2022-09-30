import { Router } from 'express';

import * as coinController from '../controllers/coin.controller.js';

const router = Router();

export default router
  .get('/markets', coinController.getAllCoins)
  .get('/:id', coinController.getCoinById);
