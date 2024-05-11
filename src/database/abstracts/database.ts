import { Instance, Model } from './model';

export interface Database {
  store: Map<string, Map<string, Instance[]>>;
  connect(): boolean;
  disconnect(): boolean;
  createModel<T extends Instance>(modelName: string): Model<T>;
}
