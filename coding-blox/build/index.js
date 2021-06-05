"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contest_1 = __importDefault(require("./entities/contest"));
const question_1 = __importDefault(require("./entities/question"));
const q1 = new question_1.default(null, 'LOW');
const q2 = new question_1.default(null, 'MEDIUM');
const q3 = new question_1.default(null, 'MEDIUM');
const c1 = new contest_1.default('LOW');
c1.addQuestion(q1);
c1.addQuestion(q2);
c1.addQuestion(q3);
console.log(c1);
// const scan = prompt();
// let testCases = Number(scan());
// while (testCases-- > 0) {
//   const A = scan()
//     .split(' ')
//     .map((num) => parseInt(num));
//   const user = new User('ken', A[0]);
//   console.log(user);
// }
