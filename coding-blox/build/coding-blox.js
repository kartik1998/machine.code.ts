'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const user_1 = require('./user/user');
const question_1 = require('./question/question');
const contest_1 = require('./contest/contest');
class CodingBlox {
  static createUser(userName) {
    return this.userStorage.addUser(userName);
  }
  static createQuestion(difficultyLevel, score) {
    return this.questionStorage.addQuestion(new question_1.Question(difficultyLevel, score));
  }
  static listQuestions(difficultyLevel = null) {
    console.log(this.questionStorage.getQuestions(difficultyLevel));
  }
  static createContest(contestName, contestLevel, contestCreatorName) {
    const contestCreator = this.userStorage.getUser(contestCreatorName);
    if (!contestCreator) throw new Error(`User ${contestCreatorName} does not exist. Cannot create contest`);
    return this.contestStorage.addContest(contestName, contestLevel, contestCreatorName, contestCreator);
  }
  static listContests(difficultyLevel = null) {
    console.log(this.contestStorage.getContests(difficultyLevel));
  }
  static attendContest(contestId, userName) {
    const contest = this.contestStorage.getContestFromId(contestId);
    if (!contest) throw new Error(`Contest ${contestId} does not exist`);
    const user = this.userStorage.getUser(userName);
    if (!user) throw new Error(`User ${userName} does not exist`);
    contest.addContestAttendee(user);
  }
  static runContest(contestId, contestCreatorName) {
    const contest = this.contestStorage.getContestFromId(contestId);
    if (!contest) throw new Error(`Contest ${contestId} does not exist`);
    const user = this.userStorage.getUser(contestCreatorName);
    if (!user) throw new Error(`Contest creator user: ${contestCreatorName} does not exist`);
    if (contest.getContestCreatorName() !== contestCreatorName) {
      throw new Error('Only contest creator can run the contest');
    }
    const contestState = contest.getState();
    if (contestState === 'FINISHED') throw new Error(`Contest is already completed`);
    contest.getContestAttendees().forEach((attendee) => {
      const questionBank = this.questionStorage.getQuestions(contest.getContestLevel());
      let contestScoreOfUser = 0;
      questionBank.forEach((question) => {
        const score = question.getScore();
        contestScoreOfUser += score;
      });
      contest.addPerformance({
        userName: attendee.getUserName(),
        contest_score: contestScoreOfUser,
        question_set: questionBank.map((question) => question.getQuestionId()),
      });
      attendee.setScore(attendee.getScore() + contestScoreOfUser);
    });
    contest.setState('FINISHED');
  }
  static leaderBoard() {
    const users = [];
    this.userStorage.getUsers().forEach((user) => {
      users.push({
        userName: user.getUserName(),
        score: user.getScore(),
      });
    });
    users.sort((a, b) => {
      return b.score - a.score;
    });
    console.dir(users, { depth: null });
  }
  static contestHistory(contestId) {
    const contest = this.contestStorage.getContestFromId(contestId);
    if (!contest) throw new Error(`Contest ${contestId} does not exist`);
    if (contest.getState() === 'UNFINISHED') {
      console.log(`Contest not yet started`);
      return;
    }
    console.log(contest.getContestAttendeesBoard());
  }
  static withdrawContest(contestId, userName) {
    const contest = this.contestStorage.getContestFromId(contestId);
    if (!contest) throw new Error(`Contest ${contestId} does not exist`);
    const user = this.userStorage.getUser(userName);
    if (!user) throw new Error(`User ${userName} does not exist`);
    if (contest.getState() === 'FINISHED') {
      throw new Error(`Contest ${contestId} is finished, cannot withdraw`);
    }
    if (contest.getContestCreatorName() === userName) {
      throw new Error(`Creator: ${userName} cannot withdraw`);
    }
    contest.removeContestAttendee(userName);
  }
  static print() {
    console.dir(this, { depth: null });
  }
}
exports.default = CodingBlox;
CodingBlox.userStorage = new user_1.UserStorage();
CodingBlox.questionStorage = new question_1.QuestionStorage();
CodingBlox.contestStorage = new contest_1.ContestStorage();
