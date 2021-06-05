import prompt from 'prompt-sync';
import User from './entities/user';
import Group from './entities/group';
import SplitWise from './split-wise';

SplitWise.addUser(new User('u1', 22));
SplitWise.addUser(new User('u2', 23));
SplitWise.addUser(new User('u3', 21));
SplitWise.addGroup(new Group(SplitWise.getUsers()));

console.dir(SplitWise, { depth: null });
// const scan = prompt();

// let testCases = Number(scan());

// while (testCases-- > 0) {
//   const A = scan()
//     .split(' ')
//     .map((num) => parseInt(num));
//   const user = new User('ken', A[0]);
//   console.log(user);
// }
