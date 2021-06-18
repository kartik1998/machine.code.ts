"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coding_blox_1 = __importDefault(require("./coding-blox"));
const question_1 = __importDefault(require("./question/question"));
const q1 = new question_1.default('LOW', 10);
const q2 = new question_1.default('HIGH', 30);
coding_blox_1.default.createQuestion(q1);
coding_blox_1.default.createQuestion(q2);
coding_blox_1.default.listQuestion('LOW');
