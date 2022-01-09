import { container } from 'tsyringe';

import { TransactionsRepository } from '../../modules/transactions/repositories/implementations/TransactionsRepository';
import { ITransactionsRepository } from '../../modules/transactions/repositories/ITransactionsRepository';
import { UsersRepository } from '../../modules/users/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<ITransactionsRepository>('TransactionsRepository', TransactionsRepository);
