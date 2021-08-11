'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class RestrauntInventory {
  constructor() {}
  static addRestraunt(restraunt) {
    if (!this.restrauntList.includes(restraunt)) {
      this.restrauntList.push(restraunt);
    }
  }
  static getRestrauntList() {
    return this.restrauntList;
  }
}
exports.default = RestrauntInventory;
RestrauntInventory.restrauntList = [];
