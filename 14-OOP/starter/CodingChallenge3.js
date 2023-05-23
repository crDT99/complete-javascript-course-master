'use strict';

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// -------------------------- PARENT CLASS -------------------------------

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// Methods

car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`acelerating, this is the new speed: ${this.speed}km/h`);
};
car.prototype.brake = function brake() {
  this.speed = this.speed - 5;
  console.log(`braking, this is the new speed: ${this.speed}km/h`);
};

// -------------------------- CHILD CLASS -------------------------------

// 1. create the child class with the needed arguments, and call the parent class
const EV = function (make, speed, charge) {
  // calling the parent "class" passing the this keyword as an argument
  car.call(this, make, speed);
  this.charge = charge;
};

// 2. create the prototype using Object.create (link the prototypes)

EV.prototype = Object.create(car.prototype);

EV.prototype.chargeTo = function (chargelvl) {
  this.charge = chargelvl;
  console.log(`Charging...  Up to (${this.charge})`);
};

// 3. POLIMORFISM :  A CHILD CLASS HAS ITS OWN VERSION OF A PARENT'S METHOD (THE CHILD CHANGES THE INHERITED FUNCTION WHEN USED BY THE CHILD)
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// 4. create new Object!!

const TeslaCar = new EV('Tesla', 120, 23);

console.log(TeslaCar); //EV {make: 'Tesla', speed: 120, charge: 23}
TeslaCar.accelerate(); //Tesla going at 140 km/h, with a charge of 22%
TeslaCar.brake(); //braking, this is the new speed: 135km/h
TeslaCar.chargeTo(90); //Charging...  Up to (90)
TeslaCar.accelerate(); //Tesla going at 155 km/h, with a charge of 89%
TeslaCar.accelerate(); //Tesla going at 175 km/h, with a charge of 88%
