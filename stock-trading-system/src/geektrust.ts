import fs from 'fs';
import path from 'path';
import createOrder from './utility/createOrder';
import TradeController from './trade/controller';

const dir = path.dirname(__dirname);
const sampleTestPath = dir + '/test/sample_test.txt';
const testFilePath = process.argv[2] || sampleTestPath;
let orders: string | string[] = fs.readFileSync(testFilePath, 'utf-8');
orders = orders.split('\n');

orders.forEach((o) => {
  const orderArray = o.split(' ').filter((f) => f !== ''); // filter out empty spaces from order.
  const order = createOrder(orderArray);
  TradeController.serveOrder(order);
});
