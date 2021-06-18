"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contest {
    constructor(contestName, level, creator) {
        this.contestName = contestName;
        this.level = level;
        this.creator = creator;
    }
    getContestName() {
        return this.contestName;
    }
    setContestName(contestName) {
        this.contestName = contestName;
    }
    getLevel() {
        return this.level;
    }
    setLevel(level) {
        this.level = level;
    }
    getCreator() {
        return this.creator;
    }
    setCreator(creator) {
        this.creator = creator;
    }
}
exports.default = Contest;
