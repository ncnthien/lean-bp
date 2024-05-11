export type Instance = object & { id: string };

export interface Model<T extends Instance> {
  create(data: T): T;
  getByID(id: string): T | undefined;
  getAll(): T[];
  update(id: string, data: T): void;
  delete(id: string): void;
}
