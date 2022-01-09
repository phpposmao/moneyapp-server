import { inject, injectable } from 'tsyringe';
import { Transaction } from '../../../../database/entities/Transaction';
import { ICreateTransactionDTO } from '../../dtos/ICreateTransactionDTO';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

@injectable()
class CreateTransactionUseCase {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository
  ) {}

  async execute({ title, amount, type, category, user_id }: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = await this.transactionsRepository.create({
      title,
      amount,
      type,
      category,
      user_id,
    });

    return transaction;
  }
}

export { CreateTransactionUseCase };
