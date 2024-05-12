export type Instance = object & { id: string };

export interface Model<T extends Instance> {
  create(data: T): Promise<T>;
}
