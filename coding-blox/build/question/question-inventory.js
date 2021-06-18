'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class QuestionInventory {
  constructor() {
    this.questionList = [];
  }
  addQuestion(question) {
    if (!this.questionList.includes(question)) {
      this.questionList.push(question);
      return true;
    }
    return false;
  }
  printQuestionList() {
    console.log(this.questionList);
  }
  getQuestionList() {
    return this.questionList;
  }
}
exports.default = QuestionInventory;
