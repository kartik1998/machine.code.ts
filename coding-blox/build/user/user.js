'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class User {
  constructor(userName) {
    this.score = 1500;
    this.userName = userName;
  }
  getScore() {
    return this.score;
  }
  setScore(score) {
    this.score = score;
  }
  getUserName() {
    return this.userName;
  }
}
exports.default = User;
