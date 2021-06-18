'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Contest {
  constructor(contestName, level, creator) {
    this.attendees = [];
    this.contestName = contestName;
    this.level = level;
    this.creator = creator;
    this.attendees.push(creator);
  }
  runContest(creator, questions) {
    if (creator !== this.creator) return false;
    const contestSets = [];
    const pickRandom = (arr, count) => {
      let _arr = [...arr];
      return [...Array(count)].map(() => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]);
    };
    this.attendees.forEach((attendee) => {
      contestSets.push({
        user: attendee.getUserName(),
        questions: pickRandom(questions, 3),
      });
    });
    return contestSets;
  }
  attendContest(user) {
    if (this.attendees.includes(user)) return false;
    this.attendees.push(user);
    return true;
  }
  getContestName() {
    return this.contestName;
  }
  setContestName(contestName) {
    this.contestName = contestName;
  }
  getLevel() {
    return this.level;
  }
  setLevel(level) {
    this.level = level;
  }
  getCreator() {
    return this.creator;
  }
  setCreator(creator) {
    this.creator = creator;
  }
}
exports.default = Contest;
