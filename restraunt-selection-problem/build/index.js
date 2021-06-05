"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./entities/user"));
const restraunt_1 = __importDefault(require("./entities/restraunt"));
const restraunt_controller_1 = __importDefault(require("./restraunt-controller"));
const MinCostStrategy_1 = __importDefault(require("./strategy/MinCostStrategy"));
const Kartik = new user_1.default('Kartik', 22);
const Meher = new user_1.default('Meher', 23);
const Rehan = new user_1.default('Rehan', 0);
const haldirams = new restraunt_1.default('haldirams', {
    "Dahi Bhalle": 140,
    "Masala Dosa": 100,
    "Maggi": 35,
    "Chole Bhature": 60
}, 3);
const mechc = new restraunt_1.default('mechc', {
    "Dahi Bhalle": 120
}, 2);
restraunt_controller_1.default.addRestraunt(haldirams);
restraunt_controller_1.default.addRestraunt(mechc);
restraunt_controller_1.default.bookOrder(['Dahi Bhalle', 'Masala Dosa'], new MinCostStrategy_1.default());
console.log(restraunt_controller_1.default.getRestrauntList());
