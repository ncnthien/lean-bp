import { Usecase } from 'src/use-cases/abstracts/usecase';

export interface Server {
  start(port: number, cb: () => void): void;
  get<Input, Output>(path: string, usecase: Usecase<Input, Output>): void;
  post<Input, Output>(path: string, usecase: Usecase<Input, Output>): void;
  put<Input, Output>(path: string, usecase: Usecase<Input, Output>): void;
  patch<Input, Output>(path: string, usecase: Usecase<Input, Output>): void;
}
