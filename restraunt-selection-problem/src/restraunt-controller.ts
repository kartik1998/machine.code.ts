import Restraunt from './entities/restraunt';
import RestrauntInventory from './inventory/RestrauntInventory';
import { IStrategy } from './strategy/IStrategy';

export default class RestrauntController {
  private constructor() {}
  public static addRestraunt(restraunt: Restraunt) {
    RestrauntInventory.addRestraunt(restraunt);
  }

  public static getRestrauntList() {
    return RestrauntInventory.getRestrauntList();
  }

  public static bookOrder(order: any, strategy: IStrategy): boolean {
    const restraunt = strategy.selectRestraunt(RestrauntInventory.getRestrauntList(), order);
    if (!restraunt) return false;
    return restraunt.bookOrder(order);
  }
}
