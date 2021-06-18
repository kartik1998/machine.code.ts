import { LEVEL } from '../types';
import User from '../user/user';

export default class Contest {
  private contestName: string;
  private level: LEVEL;
  private creator: User;
  constructor(contestName: string, level: LEVEL, creator: User) {
    this.contestName = contestName;
    this.level = level;
    this.creator = creator;
  }
  public getContestName(): string {
    return this.contestName;
  }

  public setContestName(contestName: string): void {
    this.contestName = contestName;
  }

  public getLevel(): LEVEL {
    return this.level;
  }

  public setLevel(level: LEVEL): void {
    this.level = level;
  }

  public getCreator(): User {
    return this.creator;
  }

  public setCreator(creator: User): void {
    this.creator = creator;
  }
}
