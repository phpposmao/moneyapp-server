import { Transaction } from '../../../database/entities/Transaction';
import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';

interface ITransactionsRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  list(userId): Promise<Transaction[]>;
}

export { ITransactionsRepository };
