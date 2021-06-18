import { LEVEL } from './../types';
export default class Question {
  private static autoIncr = 1;
  private score: number;
  private id: number = 0;
  private difficultyLevel: LEVEL;

  constructor(difficultyLevel: LEVEL, score: number) {
    this.score = score;
    this.difficultyLevel = difficultyLevel;
    this.id += Question.autoIncr;
    Question.autoIncr += 1;
  }

  public getScore(): number {
    return this.score;
  }

  public getDifficultyLevel(): LEVEL {
    return this.difficultyLevel;
  }

  public getId(): number {
    return this.id;
  }
}
