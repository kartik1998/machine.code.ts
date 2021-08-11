'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserStorage = exports.User = void 0;
const defaultScore = 1500;
class User {
  constructor(userName) {
    this.score = defaultScore;
    this.userName = userName;
  }
  getUserName() {
    return this.userName;
  }
  setScore(score) {
    this.score = score;
  }
  getScore() {
    return this.score;
  }
}
exports.User = User;
class UserStorage {
  constructor() {
    this.userList = [];
  }
  addUser(userName) {
    for (const u of this.userList) {
      if (u.getUserName() === userName) return null;
    }
    const user = new User(userName);
    this.userList.push(user);
    return user;
  }
  getUser(userName) {
    for (const u of this.userList) {
      if (u.getUserName() === userName) return u;
    }
    return null;
  }
  getUsers() {
    return this.userList;
  }
}
exports.UserStorage = UserStorage;
