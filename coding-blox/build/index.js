"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coding_blox_1 = __importDefault(require("./coding-blox"));
const contest_1 = __importDefault(require("./contest/contest"));
const question_1 = __importDefault(require("./question/question"));
const user_1 = __importDefault(require("./user/user"));
const u1 = new user_1.default('kartik');
const q1 = new question_1.default('LOW', 10);
const q2 = new question_1.default('HIGH', 30);
coding_blox_1.default.createQuestion(q1);
coding_blox_1.default.createQuestion(q2);
const c1 = new contest_1.default('c1-2021', 'LOW', u1);
coding_blox_1.default.createContest(c1);
coding_blox_1.default.listContest();
