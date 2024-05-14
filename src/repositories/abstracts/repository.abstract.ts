export type Instance = object & { id: string };

export interface Repository<T extends Instance> {
  create(data: T): Promise<T>;
}
