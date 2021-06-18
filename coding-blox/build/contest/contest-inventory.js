'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ContestInventory {
  constructor() {
    this.contestList = [];
  }
  addContest(contest) {
    if (this.contestList.includes(contest)) return false;
    this.contestList.push(contest);
    return true;
  }
  getContestList() {
    return this.contestList;
  }
  printContestList() {
    console.log(this.contestList);
  }
}
exports.default = ContestInventory;
