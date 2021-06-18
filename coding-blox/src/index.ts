import CodingBlox from './coding-blox';
import Contest from './contest/contest';
import Question from './question/question';
import User from './user/user';

const u1 = new User('kartik');
const q1 = new Question('LOW', 10);
const q2 = new Question('HIGH', 30);

CodingBlox.createQuestion(q1);
CodingBlox.createQuestion(q2);

const c1 = new Contest('c1-2021', 'LOW', u1);

CodingBlox.createContest(c1);
CodingBlox.listContest();