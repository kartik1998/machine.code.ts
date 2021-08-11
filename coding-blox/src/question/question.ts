import { Level } from '../types';

let questionIdIncrementer = 1;
export class Question {
  private difficultyLevel: Level;
  private score: number;
  private questionId: number = 0;
  constructor(difficultyLevel: Level, score: number) {
    this.difficultyLevel = difficultyLevel;
    this.score = score;
    this.questionId = questionIdIncrementer;
    questionIdIncrementer += 1;
  }

  public getdifficultyLevel(): Level {
    return this.difficultyLevel;
  }
  public getScore(): number {
    return this.score;
  }
  public getQuestionId(): number {
    return this.questionId;
  }
}

export class QuestionStorage {
  private questionList: Array<Question> = [];
  public addQuestion(question: Question) {
    this.questionList.push(question);
    return question;
  }

  public searchQuestion(id: number): Question | null {
    let ques: Question | null = null;
    for (const q of this.questionList) {
      if (q.getQuestionId() === id) {
        ques = q;
        break;
      }
    }
    return ques;
  }

  public getQuestions(difficultyLevel: Level | null = null) {
    if (!difficultyLevel) return this.questionList;
    return this.questionList.filter((q) => q.getdifficultyLevel() === difficultyLevel);
  }

  public generateQuestionBank(difficultyLevel: Level): Array<Question> {
    const questions = this.getQuestions(difficultyLevel); // Skipping randomization for now
    return questions;
  }
}
