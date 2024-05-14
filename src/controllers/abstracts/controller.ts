import { Usecase } from 'src/use-cases/abstracts/usecase';

export interface Controller {
  with(path: string): this;
  use<Input, Output>(usecase: Usecase<Input, Output>): void;
}
