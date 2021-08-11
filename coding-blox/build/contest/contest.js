'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ContestStorage = exports.Contest = void 0;
let contestIdIncrementer = 1;
class Contest {
  constructor(contestName, contestLevel, contestCreatorName, contestCreator) {
    this.contestState = 'UNFINISHED';
    this.contestAttendeesBoard = [];
    this.contestName = contestName;
    this.contestLevel = contestLevel;
    this.contestCreatorName = contestCreatorName;
    this.contestCreator = contestCreator;
    this.contestId = contestIdIncrementer;
    contestIdIncrementer += 1;
    this.contestAttendees = [contestCreator];
  }
  setState(state) {
    this.contestState = state;
  }
  getState() {
    return this.contestState;
  }
  addPerformance(performance) {
    this.contestAttendeesBoard.push(performance);
  }
  getContestAttendeesBoard() {
    return this.contestAttendeesBoard;
  }
  addContestAttendee(attendee) {
    if (!this.contestAttendees.includes(attendee)) this.contestAttendees.push(attendee);
  }
  removeContestAttendee(attendeeName) {
    this.contestAttendees = this.contestAttendees.filter((attendee) => attendeeName !== attendee.getUserName());
  }
  getContestAttendees() {
    return this.contestAttendees;
  }
  getContestId() {
    return this.contestId;
  }
  getContestName() {
    return this.contestName;
  }
  getContestLevel() {
    return this.contestLevel;
  }
  getContestCreator() {
    return this.contestCreator;
  }
  getContestCreatorName() {
    return this.contestCreatorName;
  }
}
exports.Contest = Contest;
class ContestStorage {
  constructor() {
    this.contestList = [];
    this.contestMap = {};
  }
  addContest(contestName, contestLevel, contestCreatorName, contestCreator) {
    const contest = new Contest(contestName, contestLevel, contestCreatorName, contestCreator);
    this.contestList.push(contest);
    this.contestMap[contest.getContestId()] = contest;
    return contest;
  }
  getContests(difficultyLevel = null) {
    if (!difficultyLevel) return this.contestList;
    return this.contestList.filter((contest) => contest.getContestLevel() === difficultyLevel);
  }
  getContestFromId(contestId) {
    return this.contestMap[contestId];
  }
}
exports.ContestStorage = ContestStorage;
