"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const question_inventory_1 = __importDefault(require("./question/question-inventory"));
const user_inventory_1 = __importDefault(require("./user/user-inventory"));
const contest_inventory_1 = __importDefault(require("./contest/contest-inventory"));
class CodingBlox {
    constructor() { }
    static createUser(user) {
        return this.userInventory.addUser(user);
    }
    static createQuestion(question) {
        return this.questionInventory.addQuestion(question);
    }
    static createContest(contest) {
        return this.contestInventory.addContest(contest);
    }
    static listContest(level = undefined) {
        if (!level) {
            this.printContestList();
            return;
        }
        const contests = [];
        this.contestInventory.getContestList().forEach((contest) => {
            if (contest.getLevel() === level)
                contests.push(contest);
        });
        console.log(contests);
    }
    static listQuestion(level = undefined) {
        if (!level) {
            this.printQuestionList();
            return;
        }
        const questions = [];
        this.questionInventory.getQuestionList().forEach((question) => {
            if (question.getDifficultyLevel() === level) {
                questions.push(question);
            }
        });
        console.log(questions);
    }
    /**
     * @support methods
     */
    static printUserList() {
        this.userInventory.printUserList();
    }
    static printQuestionList() {
        this.questionInventory.printQuestionList();
    }
    static printContestList() {
        this.contestInventory.printContestList();
    }
}
exports.default = CodingBlox;
CodingBlox.userInventory = new user_inventory_1.default();
CodingBlox.questionInventory = new question_inventory_1.default();
CodingBlox.contestInventory = new contest_inventory_1.default();
