import CodingBlox from './coding-blox';
import Contest from './contest/contest';
import Question from './question/question';
import User from './user/user';

const u1 = new User('kartik');
const u2 = new User('rehan');

for (let i = 0; i < 10; i++) {
  const low = new Question('LOW', 10);
  const med = new Question('MEDIUM', 30);
  const high = new Question('HIGH', 50);
  CodingBlox.createQuestion(low);
  CodingBlox.createQuestion(med);
  CodingBlox.createQuestion(high);
}

const c1 = new Contest('c1-2021', 'LOW', u1);

CodingBlox.createContest(c1);
CodingBlox.attendContest(c1, u2);
CodingBlox.listContest();

console.log(CodingBlox.runContest(c1, u1));
