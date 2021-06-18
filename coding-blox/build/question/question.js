'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Question {
  constructor(difficultyLevel, score) {
    this.id = 0;
    this.score = score;
    this.difficultyLevel = difficultyLevel;
    this.id += Question.autoIncr;
    Question.autoIncr += 1;
  }
  getScore() {
    return this.score;
  }
  getDifficultyLevel() {
    return this.difficultyLevel;
  }
  getId() {
    return this.id;
  }
}
exports.default = Question;
Question.autoIncr = 1;
