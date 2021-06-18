import Question from './question';

export default class QuestionInventory {
  private questionList: Array<Question> = [];

  public addQuestion(question: Question): boolean {
    if (!this.questionList.includes(question)) {
      this.questionList.push(question);
      return true;
    }
    return false;
  }

  public printQuestionList(): void {
    console.log(this.questionList);
  }

  public getQuestionList(): Array<Question> {
    return this.questionList;
  }
}
