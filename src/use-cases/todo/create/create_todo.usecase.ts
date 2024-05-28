import { Usecase } from 'src/use-cases/abstracts/usecase.abstract';
import { CreateTodoInputDTO } from './dtos/create_todo_input.dto';
import { Server } from 'src/server/abstracts/server.abstract';
import { Database } from 'src/database/abstracts/database';
import { CreateTodoOutputDTO } from './dtos/create_todo_output.dto';

export class CreateTodoUsecase implements Usecase {
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
