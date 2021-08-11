import Group from './entities/group';
import User from './entities/user';

export default class SplitWise {
  private static users: Array<User> = [];
  private static groups: Array<Group> = [];

  private constructor() {}
  public static addUser(user: User): void {
    if (!this.users.includes(user)) this.users.push(user);
  }
  public static addGroup(group: Group): void {
    if (!this.groups.push(group)) this.groups.push(group);
  }
  public static getUsers(): Array<User> {
    return this.users;
  }
}
