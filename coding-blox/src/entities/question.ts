import { createId } from '../lib/utils';

export default class Question {
  private id: string;
  private meta: any;
  private level: 'LOW' | 'MEDIUM' | 'HIGH';
  constructor(meta: any = { title: 'unknown' }, level: 'LOW' | 'MEDIUM' | 'HIGH') {
    this.meta = meta;
    this.level = level;
    this.id = createId();
  }

  public getId(): string {
    return this.id;
  }

  public getLevel(): string {
    return this.level;
  }
}
