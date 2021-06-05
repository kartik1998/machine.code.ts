export default class Restraunt {
  private name: string;
  private menu: any = {};
  private maxOrders: number;
  private orderCount: number = 0;
  private orders: Array<any> = [];
  constructor(name: string, menu: any, maxOrders: number) {
    this.name = name;
    this.menu = menu;
    this.maxOrders = maxOrders;
  }

  public updateMenu(menuObj: any): void {
    Object.keys(menuObj).forEach((key) => (this.menu[key] = menuObj[key]));
  }

  public isOrderable(order: Array<string>): boolean {
    if (this.orderCount >= this.maxOrders) return false;
    let flag = true;
    order.forEach((key) => {
      if (!Object.keys(this.menu).includes(key)) flag = false;
    });
    return flag;
  }

  public getOrderCost(order: Array<string>): any {
    if (!this.isOrderable(order)) return null;
    let orderSum = 0;
    order.forEach((key) => {
      orderSum += this.menu[key];
    });
    return orderSum;
  }

  public bookOrder(order): boolean {
    if (this.isOrderable(order)) {
      this.orderCount += 1;
      this.orders.push(order);
      return true;
    }
    return false;
  }

  public completeOrder(): boolean {
    if (this.orderCount === 0) return false;
    this.orderCount -= 1;
    this.orders.shift();
    return true;
  }
}
