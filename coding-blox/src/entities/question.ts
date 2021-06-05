import { createId } from '../lib/utils';
import * as types from '../types';

export default class Question {
  private id: number;
  private meta: any;
  private level: types.LEVEL;
  private score: number;

  constructor(level: types.LEVEL, score: number, id: number, meta: any = { title: '' }) {
    this.meta = meta;
    this.level = level;
    this.id = id;
    this.score = score;
  }

  public getId(): number {
    return this.id;
  }

  public getScore(): number {
    return this.score;
  }

  public getMeta(): any {
    return this.meta;
  }

  public getLevel(): string {
    return this.level;
  }
}
