import Restraunt from '../entities/restraunt';
import { IStrategy } from './IStrategy';

export default class MinCostStrategy extends IStrategy {
  constructor() {
    super('minCost');
  }
  /**
   * @override
   */
  public selectRestraunt(restrauntList: Array<Restraunt>, order: any): Restraunt {
    let minCost = Number.MAX_SAFE_INTEGER;
    let finalRestraunt: any = null;
    restrauntList.forEach((restraunt) => {
      const cost = restraunt.getOrderCost(order);
      if (cost && minCost > cost) {
        minCost = cost;
        finalRestraunt = restraunt;
      }
    });
    return finalRestraunt;
  }
}
