import { Usecase } from 'src/use-cases/abstracts/usecase';

export interface Server {
  start(port: number, cb: () => void): void;
  get<Input>(path: string, usecase: Usecase<Input>): void;
  post<Input>(path: string, usecase: Usecase<Input>): void;
  put<Input>(path: string, usecase: Usecase<Input>): void;
  patch<Input>(path: string, usecase: Usecase<Input>): void;
  sendResponse<T>(data: T): void;
}
