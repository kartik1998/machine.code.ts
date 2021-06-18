export default class User {
  private userName: string;
  private score: number = 1500;
  constructor(userName: string) {
    this.userName = userName;
  }

  public getScore(): number {
    return this.score;
  }

  public setScore(score: number): void {
    this.score = score;
  }

  public getUserName(): string {
    return this.userName;
  }
}
