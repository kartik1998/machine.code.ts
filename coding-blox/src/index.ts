import CodingBlox from './coding-blox';

CodingBlox.createUser('Kartik');
CodingBlox.createUser('Rehan');
CodingBlox.createUser('Ahana');

CodingBlox.createQuestion('HIGH', 50);
CodingBlox.createQuestion('LOW', 10);
CodingBlox.createQuestion('MEDIUM', 25);

CodingBlox.createContest('jun-challenge', 'MEDIUM', 'Kartik'); // contestId : 1
CodingBlox.createContest('may-challenge', 'LOW', 'Kartik'); // contestId: 2

CodingBlox.attendContest(1, 'Rehan');
CodingBlox.attendContest(2, 'Rehan');
CodingBlox.attendContest(2, 'Ahana');
CodingBlox.withdrawContest(1, 'Rehan');

CodingBlox.runContest(1, 'Kartik');
CodingBlox.runContest(2, 'Kartik');

CodingBlox.leaderBoard();
CodingBlox.contestHistory(1);
