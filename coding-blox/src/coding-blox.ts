import { Level, State } from './types';
import { User, UserStorage } from './user/user';
import { Question, QuestionStorage } from './question/question';
import { Contest, ContestStorage } from './contest/contest';

export default class CodingBlox {
  private static userStorage = new UserStorage();
  private static questionStorage = new QuestionStorage();
  private static contestStorage = new ContestStorage();
  static createUser(userName: string): User | null {
    return this.userStorage.addUser(userName);
  }

  static createQuestion(difficultyLevel: Level, score: number): Question {
    return this.questionStorage.addQuestion(new Question(difficultyLevel, score));
  }

  static listQuestions(difficultyLevel: Level | null = null): void {
    console.log(this.questionStorage.getQuestions(difficultyLevel));
  }

  static createContest(contestName: string, contestLevel: Level, contestCreatorName: string): Contest {
    const contestCreator = this.userStorage.getUser(contestCreatorName);
    if (!contestCreator) throw new Error(`User ${contestCreatorName} does not exist. Cannot create contest`);
    return this.contestStorage.addContest(contestName, contestLevel, contestCreatorName, contestCreator);
  }

  static listContests(difficultyLevel: Level | null = null): void {
    console.log(this.contestStorage.getContests(difficultyLevel));
  }

  static attendContest(contestId: number, userName: string): void {
    const contest = this.contestStorage.getContestFromId(contestId);
    if (!contest) throw new Error(`Contest ${contestId} does not exist`);
    const user = this.userStorage.getUser(userName);
    if (!user) throw new Error(`User ${userName} does not exist`);
    contest.addContestAttendee(user);
  }

  static runContest(contestId: number, contestCreatorName: string) {
    const contest = this.contestStorage.getContestFromId(contestId);
    if (!contest) throw new Error(`Contest ${contestId} does not exist`);
    const user = this.userStorage.getUser(contestCreatorName);
    if (!user) throw new Error(`Contest creator user: ${contestCreatorName} does not exist`);
    if (contest.getContestCreatorName() !== contestCreatorName) {
      throw new Error('Only contest creator can run the contest');
    }
    const contestState: State = contest.getState();
    if (contestState === 'FINISHED') throw new Error(`Contest is already completed`);
    contest.getContestAttendees().forEach((attendee: User) => {
      const questionBank = this.questionStorage.getQuestions(contest.getContestLevel());
      let contestScoreOfUser = 0;
      questionBank.forEach((question) => {
        const score = question.getScore();
        contestScoreOfUser += score;
      });
      contest.addPerformance({
        userName: attendee.getUserName(),
        contest_score: contestScoreOfUser,
        question_set: questionBank.map((question) => question.getQuestionId()),
      });
      attendee.setScore(attendee.getScore() + contestScoreOfUser);
    });
    contest.setState('FINISHED');
  }

  static leaderBoard(): void {
    const users: Array<any> = [];
    this.userStorage.getUsers().forEach((user) => {
      users.push({
        userName: user.getUserName(),
        score: user.getScore(),
      });
    });
    users.sort((a, b): number => {
      return b.score - a.score;
    });
    console.dir(users, { depth: null });
  }

  static contestHistory(contestId: number): void {
    const contest = this.contestStorage.getContestFromId(contestId);
    if (!contest) throw new Error(`Contest ${contestId} does not exist`);
    if (contest.getState() === 'UNFINISHED') {
      console.log(`Contest not yet started`);
      return;
    }
    console.log(contest.getContestAttendeesBoard());
  }

  static withdrawContest(contestId: number, userName: string): void {
    const contest = this.contestStorage.getContestFromId(contestId);
    if (!contest) throw new Error(`Contest ${contestId} does not exist`);
    const user = this.userStorage.getUser(userName);
    if (!user) throw new Error(`User ${userName} does not exist`);
    if (contest.getState() === 'FINISHED') {
      throw new Error(`Contest ${contestId} is finished, cannot withdraw`);
    }
    if (contest.getContestCreatorName() === userName) {
      throw new Error(`Creator: ${userName} cannot withdraw`);
    }
    contest.removeContestAttendee(userName);
  }

  static print() {
    console.dir(this, { depth: null });
  }
}
