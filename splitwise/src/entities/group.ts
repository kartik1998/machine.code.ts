import User from './user';

export default class Group {
  private map: any = {};
  constructor(users: Array<User>) {
    users.forEach((user) => this.addUser(user));
  }
  public addUser(user: User): void {
    if (!Object.keys(this.map).includes(user.getName())) {
      this.map[user.getName()] = [];
    }
  }
}
