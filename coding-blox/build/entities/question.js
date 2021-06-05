"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    constructor(level, score, id, meta = { title: '' }) {
        this.meta = meta;
        this.level = level;
        this.id = id;
        this.score = score;
    }
    getId() {
        return this.id;
    }
    getScore() {
        return this.score;
    }
    getMeta() {
        return this.meta;
    }
    getLevel() {
        return this.level;
    }
}
exports.default = Question;
