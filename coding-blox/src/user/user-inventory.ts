import User from './user';

export default class UserInventory {
  private userList: Array<User> = [];

  public addUser(user: User): boolean {
    if (!this.userList.includes(user)) {
      this.userList.push(user);
      return true;
    }
    return false;
  }

  public printUserList(): void {
    console.log(this.userList);
  }

  public getUserList(): Array<User> {
    return this.userList;
  }
}
