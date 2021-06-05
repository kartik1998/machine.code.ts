"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(userName) {
        this.points = 1500;
        this.userName = userName;
    }
    setUserName(userName) {
        this.userName = userName;
    }
    getUserName() {
        return this.userName;
    }
    getPoints() {
        return this.points;
    }
    setPoints(points) {
        this.points = points;
    }
}
exports.default = User;
