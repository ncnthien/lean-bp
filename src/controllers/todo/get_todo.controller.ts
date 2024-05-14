import { Usecase } from 'src/use-cases/abstracts/usecase';
import { Controller } from '../abstracts/controller';

class GetTodoController implements Controller {
  private path: string;

  with(path: string): this {
    this.path = path;
    return this;
  }

  use<Input, Output>(usecase: Usecase<Input, Output>): void {
    usecase.excute();
  }
}
