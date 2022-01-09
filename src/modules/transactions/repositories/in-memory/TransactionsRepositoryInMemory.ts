import { Transaction } from '../../../../database/entities/Transaction';
import { ICreateTransactionDTO } from '../../dtos/ICreateTransactionDTO';
import { ITransactionsRepository } from '../ITransactionsRepository';

class TransactionsRepositoryInMemory implements ITransactionsRepository {
  transactions: Transaction[] = [];

  async create({ title, amount, type, category, user_id }: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = new Transaction();

    Object.assign(transaction, { title, amount, type, category, user_id });

    this.transactions.push(transaction);

    return transaction;
  }

  async list(): Promise<Transaction[]> {
    const all = this.transactions;
    return all;
  }
}

export { TransactionsRepositoryInMemory };
