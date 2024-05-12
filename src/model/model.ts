import { Database } from 'src/database/abstracts/database';
import { Instance, Model } from './abstracts/model.abstract';

export class ModelImpl<T extends Instance> implements Model<T> {
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
