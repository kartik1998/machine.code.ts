const defaultScore = 1500;
export class User {
  private userName: string;
  private score: number = defaultScore;

  public getUserName(): string {
    return this.userName;
  }

  public setScore(score: number) {
    this.score = score;
  }

  public getScore() {
    return this.score;
  }

  constructor(userName: string) {
    this.userName = userName;
  }
}

export class UserStorage {
  private userList: Array<User>;
  constructor() {
    this.userList = [];
  }

  public addUser(userName: string): User | null {
    for (const u of this.userList) {
      if (u.getUserName() === userName) return null;
    }
    const user = new User(userName);
    this.userList.push(user);
    return user;
  }

  public getUser(userName: string): User | null {
    for (const u of this.userList) {
      if (u.getUserName() === userName) return u;
    }
    return null;
  }

  public getUsers(): Array<User> {
    return this.userList;
  }
}
