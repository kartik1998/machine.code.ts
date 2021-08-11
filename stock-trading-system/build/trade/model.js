'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class TradeModel {
  constructor() {
    this.orderList = [];
  }
  static getInstance() {
    if (!TradeModel.instance) {
      TradeModel.instance = new TradeModel();
    }
    return TradeModel.instance;
  }
  addOrder(order) {
    this.orderList.push(order);
  }
  getOrderList() {
    return this.orderList;
  }
  updateOrder(order) {
    const tempOrderList = [];
    this.orderList.forEach((o) => {
      if (o['order-id'] !== order['order-id']) {
        tempOrderList.push(o);
      }
    });
    tempOrderList.push(order);
    this.orderList = tempOrderList;
  }
}
exports.default = TradeModel;
