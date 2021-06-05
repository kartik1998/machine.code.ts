export default class User {
  private userName: string;
  private points: number = 1500;
  constructor(userName: string) {
    this.userName = userName;
  }

  public setUserName(userName: string): void {
    this.userName = userName;
  }

  public getUserName(): string {
    return this.userName;
  }

  public getPoints(): number {
    return this.points;
  }

  public setPoints(points: number): void {
    this.points = points;
  }
}
