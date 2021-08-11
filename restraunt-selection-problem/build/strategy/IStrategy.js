'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.IStrategy = void 0;
class IStrategy {
  constructor(strategyName) {
    this.strategyName = strategyName;
  }
  selectRestraunt(restrauntList, order) {
    throw new Error('Unimplemented restraunt selection');
  }
}
exports.IStrategy = IStrategy;
