'use strict';

//----------------------- Default Parameters -----------------------

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // defaultparameters can be operations
) {
  //old way to define default values
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  //ES5 way!!
  // define the argument = value in the data entry

  const booking = {
    //enhanced object literals
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
// way to skip a default parameter
createBooking('LH123', undefined, 3);
*/

//----------------------- Passing Arguments Value vs. Reference -----------------------
/*
const flight = 'LH234'; //primitive value

const jonas = {
  //reference value
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  // when changing a value of an object, as we are passing the reference instead of a copy, every change we do to the reference object is also done in the original object

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong Passport!');
  }
};
checkIn(flight, jonas);

console.log(flight); //LH234

console.log(jonas); //{name: 'Mr.Jonas Schmedtmann', passport: 24739479284}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

// Javascript cannot pass a paraneter by reference

*/

//----------------------- First-Class Vs Higher Order Functions -----------------------

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order Function
const transformer = function (str, fn) {
  // a funtion that receibes another function
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🤚');
};

// examples

// Higher-order Function  ( callback function)
document.body.addEventListener('click', high5);
// Higher-order Function  ( callback function)
['Jonas', 'Martha', 'Adam'].forEach(high5);
