import { inject, injectable } from 'tsyringe';
import { Transaction } from '../../../../database/entities/Transaction';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

@injectable()
class ListTransactionsUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository
  ) {}

  async execute({ userId }): Promise<Transaction[]> {
    const transactions = await this.transactionsRepository.list(userId);

    return transactions;
  }
}

export { ListTransactionsUseCase };
