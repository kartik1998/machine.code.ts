const crypto = require('crypto');
export function createId() {
  return crypto.randomBytes(8).toString('hex');
}
