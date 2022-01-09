import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { transactionRoutes } from './transactions.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/transactions', transactionRoutes);
router.use('/sessions', authenticateRoutes);

export { router };
