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

// -----------Functions that receive another function as a parameter

/*
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

*/

// -----------Functions that return another function
/*

// function lvl 1
const greet = function (greeting) {
  //function lvl 2
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

//functionlvl1(arg1)
//                 |_
//                    functionlvl2(arg2)
greet('Hello')('Cristian');
// function (arg1)(arg2) ;

//Challenge

//arrow function returning arrow function
const greetArrow = greetingA => nameA => console.log(`${greetingA} ${nameA}`);

greetArrow('Hi!!')('Cristian');

*/

//----------------------- Call and Apply Methods -----------------------

// ----------- set the this keyword manually
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Cristian De la Torre');
lufthansa.book(635, 'Jhon Smith');
console.log(lufthansa);
/* bookings:Array(2)
0: {flight: 'LH239', name: 'Cristian De la Torre'}
1: {flight: 'LH635', name: 'Jhon Smith'}
*/

const eurowings = {
  airline: 'Eurowing',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // stored the function from lufthansa into a new variable called book ( we could have written the hole function too)

// as this doesnt have an object calling the method the this keyword inside the method cannot read he airline property

// **************** asing manually the this keyword ****************

//book(23, 'Sarah Williams'); //Does not work because the book method is taken as a regular funcion call

// --- CALL METHOD
//the call method is a method used over other methods to specify from which object we are calling or different entry values, it wors to set manually the this keyword
book.call(eurowings, 23, 'Sarah Williams');
//method.call(what this keyword should, rest of the arguments)

console.log(eurowings);
/*booking: Array(1)
0: {flight: 'EW23', name: 'Sarah Williams'} 
*/

book.call(lufthansa, 239, 'Mary Cooper');

console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// --- APPLY METHOD
// apply is the same as call, but apply does not receibe a list of arguments after the this keyword,  it takes an array,   but its not really ussed

const flightData = [583, 'George Cooper'];
const flightData2 = [893, 'DB Cooper'];
book.apply(swiss, flightData);

// the apply method its not really ussed because you can do the same using call and the spread operator "..."

book.call(swiss, ...flightData2);
//book.apply(swiss, flightData); = book.call(swiss, ...flightData);
console.log(swiss);

// --- BIND METHOD
// the bind method does not call inmediately the function, but it returns a new function where the this keyword is bound

// BIND dont call book function, but returns new function where the this keyword will always be set to "eurowings"

// Binded functions for the AirLines
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// Partial application
// Bind an airline  with specific values pre-selected from the method we're calling

const bookEW23 = book.bind(eurowings, 23); // this mehod books a seat for eurowing but also passing the "flightNum" = 23
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
//NaN  because in eventlisteners, the this pinsts to the element that the eventhandler is attached ( in this case the button)

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial apication -> ´reset- parameters not always

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//const variable = method.bind(this_Keyword , atributes)
const addVAT = addTax.bind(null, 0.23);
// is the same as addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

//using function that returns another function

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
