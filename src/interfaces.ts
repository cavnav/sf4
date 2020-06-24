export interface User {
  userId: string | undefined;
  fio: string;
  email: string;
  companyINN: string;
}

export type UserId = Pick<User, 'userId'>;

export interface Request {
  userId: string;
  fio: string;
  email: string;
  company: string;
  debitor: string;
  sum: number;
}