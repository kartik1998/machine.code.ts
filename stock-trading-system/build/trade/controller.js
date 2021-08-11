'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const service_1 = __importDefault(require('./service'));
class TradeController {
  static serveOrder(order) {
    service_1.default.serveOrder(order);
  }
  static getOrderList() {
    return service_1.default.getOrderList();
  }
}
exports.default = TradeController;
