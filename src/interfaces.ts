export type UserId = string | undefined;

export interface User {
  userId: UserId;
  fio: string;
  email: string;
  companyINN: string;
}

export interface Request {
  userId: UserId;
  fio: string;
  email: string;
  company: string;
  debitor: string;
  sum: number;
}

export interface SendRequest {
  userId: UserId;
  request: Request;
}