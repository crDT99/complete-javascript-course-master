'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarClass {
  // Attributes
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Methods
  acelerate() {
    this.speed = this.speed + 10;
    console.log(`acelerating, this is the new speed: ${this.speed}km/h`);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`braking, this is the new speed: ${this.speed}km/h`);
  }

  get speedUS() {
    console.log(`US : this is the CURRENT speed: ${this.speed / 1.6}mi/h`);
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(
      ` this is the current speed in miles: ${speed}mi/h,  and  in kilometers: ${this.speed}km/h`
    );
  }
}

const BMWCar = new CarClass('BMW', 100);
console.log(BMWCar.speedUS);
