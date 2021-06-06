import TradeService from './service';

class TradeController {
  static serveOrder(order: object): void {
    TradeService.serveOrder(order);
  }

  static getOrderList(): Array<object> {
    return TradeService.getOrderList();
  }
}

export default TradeController;
