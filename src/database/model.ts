import { Database } from './abstracts/database';
import { Instance, Model } from './abstracts/model';

export class ModelImpl implements Model {
  private database: Database;
  private modelName: string;

  constructor(database: Database, modelName: string) {
    this.database = database;
    this.modelName = modelName;
  }

  get model(): Map<string, Instance> {
    if (this.database.store.has(this.modelName)) {
      return this.database.store.get(this.modelName) as Map<string, Instance>;
    }
    throw new Error('Model not found');
  }

  create(data: Instance): Instance {
    this.model.set(data.id, data);
    return data;
  }

  getByID(id: string): Instance | undefined {
    this.model.forEach((instance) => {
      if (instance.id === id) {
        return instance;
      }
    });

    return undefined;
  }

  getAll(): Instance[] {
    return Array.from(this.model.values());
  }

  update(id: string, data: Instance): void {
    this.model.set(id, data);
  }

  delete(id: string): void {
    this.model.delete(id);
  }
}

