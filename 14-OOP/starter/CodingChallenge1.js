'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed = `${parseInt(this.speed) + 10}km/h`;
  console.log(`this is the new speed: ${this.speed}`);
};

car.prototype.brake = function () {
  this.speed = `${parseInt(this.speed) - 5} km/h`;
  console.log(`this is the new speed: ${this.speed}`);
};

// cration of the 2 example cars
const car1 = new car('BMW', '120 km/h');
const car2 = new car('Mercedes', '95 km/h');

car1.accelerate();
