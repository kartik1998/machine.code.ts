'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class UserInventory {
  constructor() {
    this.userList = [];
  }
  addUser(user) {
    if (!this.userList.includes(user)) {
      this.userList.push(user);
      return true;
    }
    return false;
  }
  printUserList() {
    console.log(this.userList);
  }
  getUserList() {
    return this.userList;
  }
}
exports.default = UserInventory;
