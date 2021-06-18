import Question from './question/question';
import QuestionInventory from './question/question-inventory';
import User from './user/user';
import UserInventory from './user/user-inventory';
import { LEVEL } from './types';
import Contest from './contest/contest';
import ContestInventory from './contest/contest-inventory';

export default class CodingBlox {
  private static userInventory: UserInventory = new UserInventory();
  private static questionInventory: QuestionInventory = new QuestionInventory();
  private static contestInventory: ContestInventory = new ContestInventory();

  private constructor() {}

  public static createUser(user: User): boolean {
    return this.userInventory.addUser(user);
  }

  public static createQuestion(question: Question): boolean {
    return this.questionInventory.addQuestion(question);
  }

  public static createContest(contest: Contest): boolean {
    return this.contestInventory.addContest(contest);
  }

  public static listContest(level: LEVEL | undefined = undefined): void {
    if (!level) {
      this.printContestList();
      return;
    }
    const contests: Array<Contest> = [];
    this.contestInventory.getContestList().forEach((contest) => {
      if (contest.getLevel() === level) contests.push(contest);
    });
    console.log(contests);
  }

  public static listQuestion(level: LEVEL | undefined = undefined): void {
    if (!level) {
      this.printQuestionList();
      return;
    }
    const questions: Array<Question> = [];
    this.questionInventory.getQuestionList().forEach((question) => {
      if (question.getDifficultyLevel() === level) {
        questions.push(question);
      }
    });
    console.log(questions);
  }
  /**
   * @support methods
   */
  public static printUserList(): void {
    this.userInventory.printUserList();
  }

  public static printQuestionList(): void {
    this.questionInventory.printQuestionList();
  }

  public static printContestList(): void {
    this.contestInventory.printContestList();
  }
}
