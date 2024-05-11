export type Instance = object & { id: string };

export interface Model {
  create(data: Instance): Instance;
  getByID(id: string): Instance | undefined;
  getAll(): Instance[];
  update(id: string, data: Instance): void;
  delete(id: string): void;
}
