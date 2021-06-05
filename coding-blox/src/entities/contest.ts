import Question from './question';
import * as types from '../types';
import User from './user';

export default class Contest {
  private questionsList: Array<Question> = [];
  private level: types.LEVEL;
  private contestName: string;
  private createrName: string;
  private contestId: number;
  private attendeeList: Array<User> = [];

  constructor(contestName: string, level: types.LEVEL, createrName: string, contestId: number) {
    this.level = level;
    this.contestName = contestName;
    this.createrName = createrName;
    this.contestId = contestId;
  }

  public addAttendee(user: User) {
    this.attendeeList.push(user);
  }

  public getLevel(): types.LEVEL {
    return this.level;
  }

  public getCreaterName(): string {
    return this.createrName;
  }

  public getContestName(): string {
    return this.contestName;
  }

  public addQuestion(question: Question): any {
    if (this.questionsList.includes(question)) throw new Error('Duplicate question insertion');
    if (question.getLevel() === this.level) this.questionsList.push(question);
  }
}
