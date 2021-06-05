import { createId } from '../lib/utils';
import Question from './question';

export default class Contest {
  private questionsList: Array<Question> = [];
  private id: string = createId();
  private level: 'LOW' | 'MEDIUM' | 'HIGH';

  constructor(level) {
    if(!['LOW', 'MEDIUM', 'HIGH'].includes(level)) throw new Error('Invalid level passed ' + level);
    this.level = level;
  }

  public addQuestion(question: Question): any {
    if (this.questionsList.includes(question)) throw new Error('Duplicate question insertion');
    if(question.getLevel() === this.level) this.questionsList.push(question);
  }
}
