import * as types from './types';
import Question from './entities/question';
import User from './entities/user';
import Contest from './entities/contest';

export default class CodingBlox {
  private static userList: Array<User> = [];
  private static questionList: Array<Question> = [];
  private static contestList: Array<Contest> = [];
  private static questionId: number = 1;
  private static contestId: number = 1;

  public static createUser(userName: string): boolean {
    const flag = this.doesUserNameExist(userName);
    if (!flag) this.userList.push(new User(userName));
    return !flag;
  }

  public static createQuestion(level: types.LEVEL, score: number): void {
    const question = new Question(level, score, this.questionId);
    this.questionId += 1;
    this.questionList.push(question);
  }

  public static listQuestions(level: types.LEVEL | undefined = undefined): void {
    this.questionList.forEach((question) => {
      if (!level) console.log(question);
      else if (level === question.getLevel()) console.log(question);
    });
  }

  public static createContest(contestName: string, level: types.LEVEL, createrName: string): boolean {
    if (this.doesContestNameExist(contestName) || !this.doesUserNameExist(createrName)) return false;
    const contest = new Contest(contestName, level, createrName, this.contestId);
    contest.addAttendee(this.getUserFromUserName(createrName));
    this.contestId += 1;
    this.contestList.push(contest);
    return true;
  }

  public static addAttendee(contestName: string, createrName: string) {
    if (!this.doesContestNameExist(contestName) || !this.doesUserNameExist(createrName)) return false;
    this.getContestFromContestName(contestName).addAttendee(this.getUserFromUserName(createrName));
  }

  private static doesUserNameExist(userName: string): boolean {
    let flag = false;
    this.userList.forEach((user) => {
      if (user.getUserName() === userName) flag = true;
    });
    return flag;
  }

  private static doesContestNameExist(contestName: string): boolean {
    let flag = false;
    this.contestList.forEach((contest) => {
      if (contest.getContestName() === contestName) flag = true;
    });
    return flag;
  }

  private static getUserFromUserName(userName: string) {
    let user: any = null;
    this.userList.forEach((u) => {
      if (u.getUserName() == userName) user = u;
    });
    return user;
  }

  private static getContestFromContestName(contestName: string) {
    let contest: any = null;
    this.contestList.forEach((c) => {
      if (c.getContestName() == contestName) contest = c;
    });
    return contest;
  }
}
