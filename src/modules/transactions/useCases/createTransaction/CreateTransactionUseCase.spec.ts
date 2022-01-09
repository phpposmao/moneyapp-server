/* eslint-disable no-undef */
import { TransactionsRepositoryInMemory } from '../../repositories/in-memory/TransactionsRepositoryInMemory';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';

let createTransactionUseCase: CreateTransactionUseCase;
let transactionsRepositoryInMemory: TransactionsRepositoryInMemory;

describe('Create Transaction', () => {
  beforeEach(() => {
    transactionsRepositoryInMemory = new TransactionsRepositoryInMemory();
    createTransactionUseCase = new CreateTransactionUseCase(transactionsRepositoryInMemory);
  });

  it('should be able to create a new transaction', async () => {
    const transaction = await createTransactionUseCase.execute({
      title: 'Transaction title',
      amount: 1000,
      type: 'Transaction type',
      category: 'Transaction category',
      user_id: '7cee6bbd-8789-4ad6-ab49-2a5f1d482733',
    });

    expect(transaction).toHaveProperty('id');
  });
});
