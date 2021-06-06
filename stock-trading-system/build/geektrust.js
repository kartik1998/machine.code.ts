"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createOrder_1 = __importDefault(require("./utility/createOrder"));
const controller_1 = __importDefault(require("./trade/controller"));
const dir = path_1.default.dirname(__dirname);
const sampleTestPath = dir + '/test/sample_test.txt';
const testFilePath = process.argv[2] || sampleTestPath;
let orders = fs_1.default.readFileSync(testFilePath, 'utf-8');
orders = orders.split('\n');
orders.forEach((o) => {
    const orderArray = o.split(' ').filter((f) => f !== ''); // filter out empty spaces from order.
    const order = createOrder_1.default(orderArray);
    controller_1.default.serveOrder(order);
});
