import { v4 } from 'uuid';

function createId() {
  return `${Date.now()}-${v4()}`;
}

module.exports = { createId };
