"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOrder = (array) => {
    if (array.length !== 6) {
        console.log('\x1b[35m', 'Invalid order format passed.');
        console.log('\x1b[36m%s\x1b[0m', 'Please refer to this sample format: #1 09:45 BAC sell 240.12 100');
        process.exit(1);
    }
    const order = {};
    order['order-id'] = array[0];
    order.time = array[1];
    order.stock = array[2];
    order.place = array[3];
    order.price = array[4];
    order.qty = array[5];
    // String to float conversions
    order.price = parseFloat(order.price);
    order.qty = parseFloat(order.qty);
    return order;
};
exports.default = createOrder;
