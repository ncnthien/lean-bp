import { Instance } from 'src/model/abstracts/model.abstract';

export interface Database {
  connect(): Promise<boolean>;
  disconnect(): Promise<boolean>;
  createTable(tableName: string): Promise<void>;
  create<T extends Instance>(tableName: string, data: T): Promise<T>;
}
