import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTransactionsUseCase } from './ListTransactionsUseCase';

class ListTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.headers.authorization;

    const listTransactionsUseCase = container.resolve(ListTransactionsUseCase);

    const transactions = await listTransactionsUseCase.execute({ userId });

    return response.json(transactions);
  }
}

export { ListTransactionsController };
