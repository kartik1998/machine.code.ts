import Question from '../question/question';
import { LEVEL } from '../types';
import User from '../user/user';

export default class Contest {
  private contestName: string;
  private level: LEVEL;
  private creator: User;
  private attendees: Array<User> = [];
  constructor(contestName: string, level: LEVEL, creator: User) {
    this.contestName = contestName;
    this.level = level;
    this.creator = creator;
    this.attendees.push(creator);
  }

  public runContest(creator: User, questions: Array<Question>) {
    if (creator !== this.creator) return false;
    const contestSets: any = [];

    const pickRandom = (arr, count) => {
      let _arr = [...arr];
      return [...Array(count)].map(() => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]);
    };
    this.attendees.forEach((attendee) => {
      contestSets.push({
        user: attendee.getUserName(),
        questions: pickRandom(questions, 3),
      });
    });
    return contestSets;
  }

  public attendContest(user: User): boolean {
    if (this.attendees.includes(user)) return false;
    this.attendees.push(user);
    return true;
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
