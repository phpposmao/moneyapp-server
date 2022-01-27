import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('token missings');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '2cd28513b62321fd02572fec5f31765b') as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not exists!');
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new Error('Invalid token!');
  }
}
