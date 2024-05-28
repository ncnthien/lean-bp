import { Entity } from 'src/entities/abstracts/entity.abstract';

export interface Repository<T extends Entity> {
  create(data: Omit<T, 'id'>): Promise<T>;
  getById(id: string): Promise<T | undefined>;
}
