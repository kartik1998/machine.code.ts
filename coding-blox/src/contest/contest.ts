import { Level, State } from '../types';
import { User } from '../user/user';

let contestIdIncrementer = 1;
export class Contest {
  private contestName: string;
  private contestLevel: Level;
  private contestCreator: User;
  private contestCreatorName: string;
  private contestId: number;
  private contestAttendees: Array<User>;
  private contestState: State = 'UNFINISHED';
  private contestAttendeesBoard: Array<any> = [];

  constructor(contestName: string, contestLevel: Level, contestCreatorName: string, contestCreator: User) {
    this.contestName = contestName;
    this.contestLevel = contestLevel;
    this.contestCreatorName = contestCreatorName;
    this.contestCreator = contestCreator;
    this.contestId = contestIdIncrementer;
    contestIdIncrementer += 1;
    this.contestAttendees = [contestCreator];
  }

  public setState(state: State): void {
    this.contestState = state;
  }

  public getState(): State {
    return this.contestState;
  }

  public addPerformance(performance): void {
    this.contestAttendeesBoard.push(performance);
  }

  public getContestAttendeesBoard(): Array<any> {
    return this.contestAttendeesBoard;
  }

  public addContestAttendee(attendee: User): void {
    if (!this.contestAttendees.includes(attendee)) this.contestAttendees.push(attendee);
  }

  public removeContestAttendee(attendeeName: string): void {
    this.contestAttendees = this.contestAttendees.filter((attendee) => attendeeName !== attendee.getUserName());
  }

  public getContestAttendees(): Array<User> {
    return this.contestAttendees;
  }

  public getContestId(): number {
    return this.contestId;
  }

  public getContestName(): string {
    return this.contestName;
  }

  public getContestLevel(): Level {
    return this.contestLevel;
  }

  public getContestCreator(): User {
    return this.contestCreator;
  }

  public getContestCreatorName(): string {
    return this.contestCreatorName;
  }
}

export class ContestStorage {
  private contestList: Array<Contest> = [];
  private contestMap = {};

  public addContest(contestName: string, contestLevel: Level, contestCreatorName: string, contestCreator: User) {
    const contest = new Contest(contestName, contestLevel, contestCreatorName, contestCreator);
    this.contestList.push(contest);
    this.contestMap[contest.getContestId()] = contest;
    return contest;
  }

  public getContests(difficultyLevel: Level | null = null) {
    if (!difficultyLevel) return this.contestList;
    return this.contestList.filter((contest) => contest.getContestLevel() === difficultyLevel);
  }

  public getContestFromId(contestId: number): Contest | null {
    return this.contestMap[contestId];
  }
}
