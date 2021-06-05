"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../lib/utils");
class Contest {
    constructor(level) {
        this.questionsList = [];
        this.id = utils_1.createId();
        if (!['LOW', 'MEDIUM', 'HIGH'].includes(level))
            throw new Error('Invalid level passed ' + level);
        this.level = level;
    }
    addQuestion(question) {
        if (this.questionsList.includes(question))
            throw new Error('Duplicate question insertion');
        if (question.getLevel() === this.level)
            this.questionsList.push(question);
    }
}
exports.default = Contest;
