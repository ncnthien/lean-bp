import { Instance } from 'src/model/abstracts/model.abstract';
import { Database } from './abstracts/database';

type InstanceID = string;
type Table = Map<InstanceID, Instance>;
type Store = { [tableName: string]: Table };

class DatabaseImpl implements Database {
  private isConnected: boolean = false;
  private store: Store = {};

  private getTable(tableName: string): Table {
    if (!this.store[tableName]) {
      throw new Error('Table not found.');
    }
    return this.store[tableName];
  }

  createTable(tableName: string): Promise<void> {
    if (!this.store[tableName]) {
      this.store[tableName] = new Map();
    }
    return Promise.resolve();
  }

  create<T extends Instance>(tableName: string, data: T): Promise<T> {
    this.getTable(tableName).set('the fuvking ID need an ID generator.', data);
    return Promise.resolve(data);
  }

  connect(): Promise<boolean> {
    this.isConnected = true;
    return Promise.resolve(this.isConnected);
  }

  disconnect(): Promise<boolean> {
    this.isConnected = false;
    return Promise.resolve(this.isConnected);
  }
}

export const database: Database = new DatabaseImpl();
