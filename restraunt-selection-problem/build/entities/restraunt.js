"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restraunt {
    constructor(name, menu, maxOrders) {
        this.menu = {};
        this.orderCount = 0;
        this.orders = [];
        this.name = name;
        this.menu = menu;
        this.maxOrders = maxOrders;
    }
    updateMenu(menuObj) {
        Object.keys(menuObj).forEach((key) => (this.menu[key] = menuObj[key]));
    }
    isOrderable(order) {
        if (this.orderCount >= this.maxOrders)
            return false;
        let flag = true;
        order.forEach((key) => {
            if (!Object.keys(this.menu).includes(key))
                flag = false;
        });
        return flag;
    }
    getOrderCost(order) {
        if (!this.isOrderable(order))
            return null;
        let orderSum = 0;
        order.forEach((key) => {
            orderSum += this.menu[key];
        });
        return orderSum;
    }
    bookOrder(order) {
        if (this.isOrderable(order)) {
            this.orderCount += 1;
            this.orders.push(order);
            return true;
        }
        return false;
    }
    completeOrder() {
        if (this.orderCount === 0)
            return false;
        this.orderCount -= 1;
        this.orders.shift();
        return true;
    }
}
exports.default = Restraunt;
