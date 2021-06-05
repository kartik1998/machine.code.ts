"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = __importDefault(require("./entities/question"));
const user_1 = __importDefault(require("./entities/user"));
const contest_1 = __importDefault(require("./entities/contest"));
class CodingBlox {
    static createUser(userName) {
        const flag = this.doesUserNameExist(userName);
        if (!flag)
            this.userList.push(new user_1.default(userName));
        return !flag;
    }
    static createQuestion(level, score) {
        const question = new question_1.default(level, score, this.questionId);
        this.questionId += 1;
        this.questionList.push(question);
    }
    static listQuestions(level = undefined) {
        this.questionList.forEach((question) => {
            if (!level)
                console.log(question);
            else if (level === question.getLevel())
                console.log(question);
        });
    }
    static createContest(contestName, level, createrName) {
        if (this.doesContestNameExist(contestName) || !this.doesUserNameExist(createrName))
            return false;
        const contest = new contest_1.default(contestName, level, createrName, this.contestId);
        contest.addAttendee(this.getUserFromUserName(createrName));
        this.contestId += 1;
        this.contestList.push(contest);
        return true;
    }
    static addAttendee(contestName, createrName) {
        if (!this.doesContestNameExist(contestName) || !this.doesUserNameExist(createrName))
            return false;
        this.getContestFromContestName(contestName).addAttendee(this.getUserFromUserName(createrName));
    }
    static doesUserNameExist(userName) {
        let flag = false;
        this.userList.forEach((user) => {
            if (user.getUserName() === userName)
                flag = true;
        });
        return flag;
    }
    static doesContestNameExist(contestName) {
        let flag = false;
        this.contestList.forEach((contest) => {
            if (contest.getContestName() === contestName)
                flag = true;
        });
        return flag;
    }
    static getUserFromUserName(userName) {
        let user = null;
        this.userList.forEach((u) => {
            if (u.getUserName() == userName)
                user = u;
        });
        return user;
    }
    static getContestFromContestName(contestName) {
        let contest = null;
        this.contestList.forEach((c) => {
            if (c.getContestName() == contestName)
                contest = c;
        });
        return contest;
    }
}
exports.default = CodingBlox;
CodingBlox.userList = [];
CodingBlox.questionList = [];
CodingBlox.contestList = [];
CodingBlox.questionId = 1;
CodingBlox.contestId = 1;
