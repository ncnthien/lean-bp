export type Instance = object & { id: string };

export interface Repository<T extends Instance> {
  create(data: Omit<T, 'id'>): Promise<T>;
  getById(id: string): Promise<T | undefined>;
}
