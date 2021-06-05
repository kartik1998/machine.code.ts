import Restraunt from '../entities/restraunt';

export default class RestrauntInventory {
  private static restrauntList: Array<Restraunt> = [];

  public static addRestraunt(restraunt: Restraunt) {
    if (!this.restrauntList.includes(restraunt)) {
      this.restrauntList.push(restraunt);
    }
  }

  public static getRestrauntList(): Array<Restraunt> {
    return this.restrauntList;
  }
}
