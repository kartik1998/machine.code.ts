import prompt from 'prompt-sync';
import CodingBlox from './coding-blox-controller';

CodingBlox.createUser('Kartik');
CodingBlox.createUser('Rehan');

CodingBlox.createContest('2021-s7up', 'MEDIUM', 'Kartik');
console.dir(CodingBlox, { depth: null });
// const scan = prompt();

// let testCases = Number(scan());

// while (testCases-- > 0) {
//   const A = scan()
//     .split(' ')
//     .map((num) => parseInt(num));
//   const user = new User('ken', A[0]);
//   console.log(user);
// }
