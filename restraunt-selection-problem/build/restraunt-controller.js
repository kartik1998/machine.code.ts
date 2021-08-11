'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const RestrauntInventory_1 = __importDefault(require('./inventory/RestrauntInventory'));
class RestrauntController {
  constructor() {}
  static addRestraunt(restraunt) {
    RestrauntInventory_1.default.addRestraunt(restraunt);
  }
  static getRestrauntList() {
    return RestrauntInventory_1.default.getRestrauntList();
  }
  static bookOrder(order, strategy) {
    const restraunt = strategy.selectRestraunt(RestrauntInventory_1.default.getRestrauntList(), order);
    if (!restraunt) return false;
    return restraunt.bookOrder(order);
  }
}
exports.default = RestrauntController;
