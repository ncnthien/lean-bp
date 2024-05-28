import { Entity } from './entity.abstract';

export interface Todo extends Entity {
  name: string;
  isDone: boolean;
}
