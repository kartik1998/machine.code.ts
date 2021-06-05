"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contest {
    constructor(contestName, level, createrName, contestId) {
        this.questionsList = [];
        this.attendeeList = [];
        this.level = level;
        this.contestName = contestName;
        this.createrName = createrName;
        this.contestId = contestId;
    }
    addAttendee(user) {
        this.attendeeList.push(user);
    }
    getLevel() {
        return this.level;
    }
    getCreaterName() {
        return this.createrName;
    }
    getContestName() {
        return this.contestName;
    }
    addQuestion(question) {
        if (this.questionsList.includes(question))
            throw new Error('Duplicate question insertion');
        if (question.getLevel() === this.level)
            this.questionsList.push(question);
    }
}
exports.default = Contest;
