"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IStrategy_1 = require("./IStrategy");
class MinCostStrategy extends IStrategy_1.IStrategy {
    constructor() {
        super('minCost');
    }
    /**
     * @override
     */
    selectRestraunt(restrauntList, order) {
        let maxCost = Number.MIN_SAFE_INTEGER;
        let finalRestraunt = null;
        restrauntList.forEach((restraunt) => {
            const cost = restraunt.getOrderCost(order);
            if (cost && maxCost < cost) {
                maxCost = cost;
                finalRestraunt = restraunt;
            }
        });
        return finalRestraunt;
    }
}
exports.default = MinCostStrategy;
