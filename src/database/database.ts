import { Instance, Repository } from 'src/repositories/abstracts/repository.abstract';
import { Database } from './abstracts/database';

type InstanceID = string;
type Table = Map<InstanceID, Instance>;
type Store = { [repoName: string]: Table };

class DatabaseImpl implements Database {
  private isConnected: boolean = false;
  private store: Store = {};

  private getTable(repoName: string): Table {
    if (!this.store[repoName]) {
      throw new Error('Table not found.');
    }
    return this.store[repoName];
  }

  createRepository<T extends Instance>(repoName: string): Repository<T> {
    if (!this.store[repoName]) {
      this.store[repoName] = new Map();
    }
    return Promise.resolve();
  }

  create<T extends Instance>(repoName: string, data: T): Promise<T> {
    this.getTable(repoName).set('the fuvking ID need an ID generator.', data);
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
