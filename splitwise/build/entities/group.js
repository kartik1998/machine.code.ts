"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Group {
    constructor(users) {
        this.map = {};
        users.forEach((user) => this.addUser(user));
    }
    addUser(user) {
        if (!Object.keys(this.map).includes(user.getName())) {
            this.map[user.getName()] = [];
        }
    }
}
exports.default = Group;
