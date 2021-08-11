import TradeModel from './model';

class TradeService {
  public static serveOrder(order: any) {
    TradeModel.getInstance().addOrder(order);
    if (order.place.toLowerCase() === 'sell') {
      return this.handleSellOrder(order);
    } else if (order.place.toLowerCase() === 'buy') {
      return this.handleBuyOrder(order);
    } else {
      throw new Error('Invalid order place string. Only buy and sell allowed.');
    }
  }

  private static log(buyOrderId: string, sellPrice: number, qty: number, sellOrderId: string): void {
    console.log(buyOrderId, Number(sellPrice).toFixed(2), qty, sellOrderId);
  }

  private static handleSellOrder(order: any) {
    const db = TradeModel.getInstance();
    const orderList = db.getOrderList();
    const possibleValidOrders: any = [];
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

  private static handleBuyOrder(order: any) {
    const db = TradeModel.getInstance();
    const orderList = db.getOrderList();
    const possibleValidOrders: any = [];
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
  private static rankOrders(orders: Array<any>) {
    orders.sort(function (a, b) {
      return b.price - a.price || a.time.localeCompare(b.time);
    });
  }

  public static getOrderList(): Array<any> {
    return TradeModel.getInstance().getOrderList();
  }
}

export default TradeService;
