import { Database } from './abstracts/database';
import { Instance, Model } from './abstracts/model';
import { ModelImpl } from './model';

class DatabaseImpl implements Database {
  private isConnected: boolean = false;
  store = new Map<string, Map<string, Instance[]>>();

  createModel<T extends Instance>(modelName: string): Model<T> {
    this.store.set(modelName, new Map<string, T[]>());
    return new ModelImpl<T>(this, modelName);
  }

  connect(): boolean {
    this.isConnected = true;
    return this.isConnected;
  }

  disconnect(): boolean {
    this.isConnected = false;
    return this.isConnected;
  }
}

export const database: Database = new DatabaseImpl();
