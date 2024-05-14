import { Usecase } from 'src/use-cases/abstracts/usecase';
import { CreateTodoInputDTO } from './dtos/create_todo_input.dto';
import { Server } from 'src/server/abstracts/server';
import { Database } from 'src/database/abstracts/database';
import { CreateTodoOutputDTO } from './dtos/create_todo_output.dto';

export class CreateTodoUsecase implements Usecase<CreateTodoInputDTO, CreateTodoOutputDTO> {
  private server: Server;
  private database: Database;

  constructor(server: Server, database: Database) {
    this.server = server;
    this.database = database;
  }

  excute(input: CreateTodoInputDTO): CreateTodoOutputDTO {
    const repo = this.database.createRepository('Todo');
    repo.create(input);
    return;
  }
}
