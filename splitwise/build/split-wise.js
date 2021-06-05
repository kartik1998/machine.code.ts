"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SplitWise {
    constructor() { }
    static addUser(user) {
        if (!this.users.includes(user))
            this.users.push(user);
    }
    static addGroup(group) {
        if (!this.groups.push(group))
            this.groups.push(group);
    }
    static getUsers() {
        return this.users;
    }
}
exports.default = SplitWise;
SplitWise.users = [];
SplitWise.groups = [];
