import Contest from './contest';

export default class ContestInventory {
  private contestList: Array<Contest> = [];

  public addContest(contest: Contest): boolean {
    if (this.contestList.includes(contest)) return false;
    this.contestList.push(contest);
    return true;
  }

  public getContestList(): Array<Contest> {
    return this.contestList;
  }

  public printContestList(): void {
    console.log(this.contestList);
  }
}
