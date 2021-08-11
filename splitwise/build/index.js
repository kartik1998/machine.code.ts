'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const user_1 = __importDefault(require('./entities/user'));
const group_1 = __importDefault(require('./entities/group'));
const split_wise_1 = __importDefault(require('./split-wise'));
split_wise_1.default.addUser(new user_1.default('u1', 22));
split_wise_1.default.addUser(new user_1.default('u2', 23));
split_wise_1.default.addUser(new user_1.default('u3', 21));
split_wise_1.default.addGroup(
  new group_1.default(split_wise_1.default.getUsers()),
);
console.dir(split_wise_1.default, { depth: null });
// const scan = prompt();
// let testCases = Number(scan());
// while (testCases-- > 0) {
//   const A = scan()
//     .split(' ')
//     .map((num) => parseInt(num));
//   const user = new User('ken', A[0]);
//   console.log(user);
// }
