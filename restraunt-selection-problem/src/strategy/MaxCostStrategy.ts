import Restraunt from '../entities/restraunt';
import { IStrategy } from './IStrategy';

export default class MinCostStrategy extends IStrategy {
  constructor() {
    super('highCost');
  }
  /**
   * @override
   */
  public selectRestraunt(restrauntList: Array<Restraunt>, order: any): Restraunt {
    let maxCost = Number.MIN_SAFE_INTEGER;
    let finalRestraunt: any = null;
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
