"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createId = void 0;
const crypto = require('crypto');
function createId() {
    return crypto.randomBytes(8).toString('hex');
}
exports.createId = createId;
