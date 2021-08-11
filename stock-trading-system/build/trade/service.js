'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const model_1 = __importDefault(require('./model'));
class TradeService {
  static serveOrder(order) {
    model_1.default.getInstance().addOrder(order);
    if (order.place.toLowerCase() === 'sell') {
      return this.handleSellOrder(order);
    } else if (order.place.toLowerCase() === 'buy') {
      return this.handleBuyOrder(order);
    } else {
      throw new Error('Invalid order place string. Only buy and sell allowed.');
    }
  }
  static log(buyOrderId, sellPrice, qty, sellOrderId) {
    console.log(buyOrderId, Number(sellPrice).toFixed(2), qty, sellOrderId);
  }
  static handleSellOrder(order) {
    const db = model_1.default.getInstance();
    const orderList = db.getOrderList();
    const possibleValidOrders = [];
    orderList.forEach((o) => {
      if (o.stock === order.stock && o.place.toLowerCase() === 'buy' && o.price >= order.price) {
        possibleValidOrders.push(o);
      }
    });
    this.rankOrders(possibleValidOrders);
    possibleValidOrders.forEach((o) => {
      if (order.qty != 0) {
        if (o.qty >= order.qty) {
          const qty = order.qty;
          o.qty = o.qty - qty;
          order.qty = 0;
          this.log(o['order-id'], order.price, qty, order['order-id']);
        } else {
          const qty = o.qty;
          order.qty = order.qty - o.qty;
          o.qty = 0;
          this.log(o['order-id'], order.price, qty, order['order-id']);
        }
      }
    });
    // Update orders
    possibleValidOrders.forEach((o) => {
      db.updateOrder(o);
    });
    db.updateOrder(order);
  }
  static handleBuyOrder(order) {
    const db = model_1.default.getInstance();
    const orderList = db.getOrderList();
    const possibleValidOrders = [];
    orderList.forEach((o) => {
      if (o.stock === order.stock && o.place.toLowerCase() === 'sell' && o.price <= order.price) {
        possibleValidOrders.push(o);
      }
    });
    this.rankOrders(possibleValidOrders);
    possibleValidOrders.forEach((o) => {
      if (o.qty !== 0) {
        if (o.qty >= order.qty) {
          const qty = order.qty;
          o.qty = o.qty - qty;
          order.qty = 0;
          this.log(order['order-id'], o.price, qty, o['order-id']);
        } else {
          const qty = o.qty;
          order.qty = order.qty - o.qty;
          o.qty = 0;
          this.log(order['order-id'], o.price, qty, o['order-id']);
        }
      }
    });
    // Update orders
    possibleValidOrders.forEach((o) => {
      db.updateOrder(o);
    });
    db.updateOrder(order);
  }
  /**
   * @param orders list of possible orders
   * @description sort orders by price (descending) & time (ascending)
   */
  static rankOrders(orders) {
    orders.sort(function (a, b) {
      return b.price - a.price || a.time.localeCompare(b.time);
    });
  }
  static getOrderList() {
    return model_1.default.getInstance().getOrderList();
  }
}
exports.default = TradeService;
