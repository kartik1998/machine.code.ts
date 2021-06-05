"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../lib/utils");
class Question {
    constructor(meta = { title: 'unknown' }, level) {
        this.meta = meta;
        this.level = level;
        this.id = utils_1.createId();
    }
    getId() {
        return this.id;
    }
    getLevel() {
        return this.level;
    }
}
exports.default = Question;
