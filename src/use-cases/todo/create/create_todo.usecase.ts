import { Usecase } from 'src/use-cases/abstracts/usecase';
import { CreateTodoInputDTO } from './dtos/create_todo_input.dto';
import { CreateTodoOutputDTO } from './dtos/create_todo_output.dto';

export class CreateTodoUsecase implements Usecase<CreateTodoInputDTO, CreateTodoOutputDTO> {
  excute(input: CreateTodoInputDTO): Promise<CreateTodoOutputDTO> {}
}
