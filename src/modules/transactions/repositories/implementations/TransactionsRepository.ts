import { getRepository, Repository } from 'typeorm';
import { Transaction } from '../../../../database/entities/Transaction';
import { ICreateTransactionDTO } from '../../dtos/ICreateTransactionDTO';
import { ITransactionsRepository } from '../ITransactionsRepository';

class TransactionsRepository implements ITransactionsRepository {
  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getRepository(Transaction);
  }

  async create({ title, amount, type, category, user_id }: ICreateTransactionDTO): Promise<Transaction> {
    const transation = this.repository.create({ title, amount, type, category, user_id });

    await this.repository.save(transation);

    return transation;
  }

  async list(userId): Promise<Transaction[]> {
    const transactions = await this.repository.find({ where: { user_id: userId } });

    console.log(transactions);

    return transactions;
  }
}

export { TransactionsRepository };
