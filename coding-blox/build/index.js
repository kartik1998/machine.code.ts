"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coding_blox_1 = __importDefault(require("./coding-blox"));
coding_blox_1.default.createUser('Kartik');
coding_blox_1.default.createUser('Rehan');
coding_blox_1.default.createUser('Ahana');
coding_blox_1.default.createQuestion('HIGH', 50);
coding_blox_1.default.createQuestion('LOW', 10);
coding_blox_1.default.createQuestion('MEDIUM', 25);
coding_blox_1.default.createContest('jun-challenge', 'MEDIUM', 'Kartik'); // contestId : 1
coding_blox_1.default.createContest('may-challenge', 'LOW', 'Kartik'); // contestId: 2
coding_blox_1.default.attendContest(1, 'Rehan');
coding_blox_1.default.attendContest(2, 'Rehan');
coding_blox_1.default.attendContest(2, 'Ahana');
coding_blox_1.default.withdrawContest(1, 'Rehan');
coding_blox_1.default.runContest(1, 'Kartik');
coding_blox_1.default.runContest(2, 'Kartik');
coding_blox_1.default.leaderBoard();
coding_blox_1.default.contestHistory(1);
