import { Database } from './abstracts/database';
import { Instance, Model } from './abstracts/model';

export class ModelImpl<T extends Instance> implements Model<T> {
  private database: Database;
  private modelName: string;

  constructor(database: Database, modelName: string) {
    this.database = database;
    this.modelName = modelName;
  }

  get model(): Map<string, T> {
    if (this.database.store.has(this.modelName)) {
      return this.database.store.get(this.modelName) as Map<string, T>;
    }
    throw new Error('Model not found');
  }

  create(data: T): T {
    this.model.set(data.id, data);
    return data;
  }

  getByID(id: string): T | undefined {
    this.model.forEach((instance) => {
      if (instance.id === id) {
        return instance;
      }
    });

    return undefined;
  }

  getAll(): T[] {
    return Array.from(this.model.values());
  }

  update(id: string, data: T): void {
    this.model.set(id, data);
  }

  delete(id: string): void {
    this.model.delete(id);
  }
}

