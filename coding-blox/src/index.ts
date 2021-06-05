import prompt from 'prompt-sync';
import Contest from './entities/contest';
import Question from './entities/question';
import User from './entities/user';

const q1 = new Question(null, 'LOW');
const q2 = new Question(null, 'MEDIUM');
const q3 = new Question(null, 'MEDIUM');

const c1 = new Contest('LOW');

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
