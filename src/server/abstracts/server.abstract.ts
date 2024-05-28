import { Usecase } from 'src/use-cases/abstracts/usecase';

export interface Server {
  start(port: number, cb: () => void): void;
  on<Input, Output>(path: string, method: string, usecase: Usecase<Input, Output>): void;
}
