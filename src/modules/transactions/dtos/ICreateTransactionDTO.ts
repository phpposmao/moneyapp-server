interface ICreateTransactionDTO {
  title: string;
  amount: number;
  type: string;
  category: string;
  user_id: string;
}

export { ICreateTransactionDTO };
