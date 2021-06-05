"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coding_blox_controller_1 = __importDefault(require("./coding-blox-controller"));
coding_blox_controller_1.default.createUser('Kartik');
coding_blox_controller_1.default.createUser('Rehan');
coding_blox_controller_1.default.createContest('2021-s7up', 'MEDIUM', 'Kartik');
console.log(coding_blox_controller_1.default.addAttendee('2021-s7up', 'rehan'));
console.dir(coding_blox_controller_1.default, { depth: null });
// const scan = prompt();
// let testCases = Number(scan());
// while (testCases-- > 0) {
//   const A = scan()
//     .split(' ')
//     .map((num) => parseInt(num));
//   const user = new User('ken', A[0]);
//   console.log(user);
// }
