class TradeModel {
  private static instance: TradeModel;
  private orderList: Array<any> = [];
  private constructor() {}
  public static getInstance(): TradeModel {
    if (!TradeModel.instance) {
      TradeModel.instance = new TradeModel();
    }
    return TradeModel.instance;
  }

  public addOrder(order: any): void {
    this.orderList.push(order);
  }

  public getOrderList(): Array<any> {
    return this.orderList;
  }

  public updateOrder(order: any): void {
    const tempOrderList: any = [];
    this.orderList.forEach((o) => {
      if (o['order-id'] !== order['order-id']) {
        tempOrderList.push(o);
      }
    });
    tempOrderList.push(order);
    this.orderList = tempOrderList;
  }
}

export default TradeModel;
