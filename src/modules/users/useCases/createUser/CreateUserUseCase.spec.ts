/* eslint-disable no-undef */
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user = await createUserUseCase.execute({
      name: 'Test name',
      email: 'test@test.com',
      password: '1234',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a user with already registered email', () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: 'Test name',
        email: 'test@test.com',
        password: '1234',
      });

      await createUserUseCase.execute({
        name: 'Test name',
        email: 'test@test.com',
        password: '1234',
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
