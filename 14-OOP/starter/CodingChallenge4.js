'use strict';

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

*/

// -------------------------- PARENT CLASS -------------------------------
class carCL {
  // constructor method
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // public Methods
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`acelerating, this is the new speed: ${this.speed}km/h`);
    return this;
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`braking, this is the new speed: ${this.speed}km/h`);
    return this;
  }
}

// -------------------------- CHILD CLASS -------------------------------

class EVcl extends carCL {
  // 2.'charge' property private;
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargelvl) {
    this.#charge = chargelvl;
    console.log(`Charging...  Up to (${this.#charge})`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const Rivian = new EVcl('Rivian', 120, 23);
console.log(Rivian);

Rivian.accelerate().accelerate().brake().chargeBattery(90).accelerate();
