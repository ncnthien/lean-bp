import { Instance } from 'src/repositories/abstracts/repository.abstract';

export interface Database {
  connect(): Promise<boolean>;
  disconnect(): Promise<boolean>;
  create<T extends Instance>(repositoryName: string, data: T): Promise<T>;
}
