"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionStorage = exports.Question = void 0;
let questionIdIncrementer = 1;
class Question {
    constructor(difficultyLevel, score) {
        this.questionId = 0;
        this.difficultyLevel = difficultyLevel;
        this.score = score;
        this.questionId = questionIdIncrementer;
        questionIdIncrementer += 1;
    }
    getdifficultyLevel() {
        return this.difficultyLevel;
    }
    getScore() {
        return this.score;
    }
    getQuestionId() {
        return this.questionId;
    }
}
exports.Question = Question;
class QuestionStorage {
    constructor() {
        this.questionList = [];
    }
    addQuestion(question) {
        this.questionList.push(question);
        return question;
    }
    searchQuestion(id) {
        let ques = null;
        for (const q of this.questionList) {
            if (q.getQuestionId() === id) {
                ques = q;
                break;
            }
        }
        return ques;
    }
    getQuestions(difficultyLevel = null) {
        if (!difficultyLevel)
            return this.questionList;
        return this.questionList.filter((q) => q.getdifficultyLevel() === difficultyLevel);
    }
    generateQuestionBank(difficultyLevel) {
        const questions = this.getQuestions(difficultyLevel); // Skipping randomization for now
        return questions;
    }
}
exports.QuestionStorage = QuestionStorage;
