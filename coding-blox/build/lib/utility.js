"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createId() {
    return `${Date.now()}-${uuid_1.v4()}`;
}
module.exports = { createId };
