'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const coding_blox_1 = __importDefault(require('./coding-blox'));
const contest_1 = __importDefault(require('./contest/contest'));
const question_1 = __importDefault(require('./question/question'));
const user_1 = __importDefault(require('./user/user'));
const u1 = new user_1.default('kartik');
const u2 = new user_1.default('rehan');
for (let i = 0; i < 10; i++) {
  const low = new question_1.default('LOW', 10);
  const med = new question_1.default('MEDIUM', 30);
  const high = new question_1.default('HIGH', 50);
  coding_blox_1.default.createQuestion(low);
  coding_blox_1.default.createQuestion(med);
  coding_blox_1.default.createQuestion(high);
}
const c1 = new contest_1.default('c1-2021', 'LOW', u1);
coding_blox_1.default.createContest(c1);
coding_blox_1.default.attendContest(c1, u2);
coding_blox_1.default.listContest();
console.log(coding_blox_1.default.runContest(c1, u1));
