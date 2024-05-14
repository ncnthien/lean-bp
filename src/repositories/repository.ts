import { Database } from 'src/database/abstracts/database';
import { Instance, Repository } from './abstracts/repository.abstract';

export class ModelImpl<T extends Instance> implements Repository<T> {
  private database: Database;
  private tableName: string;

  constructor(database: Database, tableName: string) {
    this.database = database;
    this.tableName = tableName;
  }

  create(data: T): Promise<T> {
    return this.database.create(this.tableName, data);
  }
}
