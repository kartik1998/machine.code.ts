'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const user_1 = __importDefault(require('./entities/user'));
const Kartik = new user_1.default('Kartik', 22);
const Meher = new user_1.default('Meher', 23);
const Rehan = new user_1.default('Rehan', 0);
console.log(Kartik === new user_1.default('Kartik', 22));
