import Restraunt from '../entities/restraunt';
export abstract class IStrategy {
  private strategyName: 'minCost' | 'highCost';
  constructor(strategyName) {
    this.strategyName = strategyName;
  }

  public selectRestraunt(restrauntList: Array<Restraunt>, order: any): Restraunt {
    throw new Error('Unimplemented restraunt selection');
  }
}
