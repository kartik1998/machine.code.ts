import CodingBlox from './coding-blox';
import Question from './question/question';

const q1 = new Question('LOW', 10);
const q2 = new Question('HIGH', 30);

CodingBlox.createQuestion(q1);
CodingBlox.createQuestion(q2);
CodingBlox.listQuestion('LOW');
