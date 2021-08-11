import User from './entities/user';
import Restraunt from './entities/restraunt';
import RestrauntController from './restraunt-controller';
import MaxCostStrategy from './strategy/MaxCostStrategy';
import MinCostStrategy from './strategy/MinCostStrategy';

const Kartik = new User('Kartik', 22);
const Meher = new User('Meher', 23);
const Rehan = new User('Rehan', 0);

const haldirams = new Restraunt(
  'haldirams',
  {
    'Dahi Bhalle': 140,
    'Masala Dosa': 100,
    Maggi: 35,
    'Chole Bhature': 60,
  },
  3,
);

const mechc = new Restraunt(
  'mechc',
  {
    'Dahi Bhalle': 120,
  },
  2,
);

RestrauntController.addRestraunt(haldirams);
RestrauntController.addRestraunt(mechc);

RestrauntController.bookOrder(['Dahi Bhalle', 'Masala Dosa'], new MinCostStrategy());
console.log(RestrauntController.getRestrauntList());
