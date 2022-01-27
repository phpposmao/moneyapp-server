import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateTransactionController } from '../modules/transactions/useCases/createTransaction/CreateTransactionController';
import { ListTransactionsController } from '../modules/transactions/useCases/listTransaction/ListTransactionsController';

const transactionRoutes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();

transactionRoutes.use(ensureAuthenticated);

transactionRoutes.post('/', createTransactionController.handle);
transactionRoutes.get('/', listTransactionsController.handle);

export { transactionRoutes };
