'use strict';

//////////////////////// WORKING WITH STRINGS part 2 ////////////////////////

//------------  toLowerCase  &&  toUpperCase
const airline = 'TAP Air Colombia';
console.log(airline.toLowerCase()); //tap air colombia
console.log(airline.toUpperCase()); //TAP AIR COLOMBIA

// fix capitalization in name
const passenger = 'cRistIAn'; // should be like Cristian
const passengerLower = passenger.toLowerCase(); //'cristian'
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // 'Cristian'
console.log(passengerCorrect);

// Comparing Emails

const email = 'hello@jonas.io';
const LoginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = LoginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // remove empty spaces
console.log(trimmedEmail);

// all in one
console.log();

//////////////////////// WORKING WITH STRINGS part 1 ////////////////////////
/*
const airline = 'TAP Air Colombia';
const plane = 'A320';

console.log(plane[0]); // "A"
console.log(plane[0], plane[1], plane[2], plane[3]); // "A 3 2 0"
console.log(plane[0], Number(plane[1] + plane[2] + plane[3])); // "A" 320

console.log(airline.length); // 16

// ************************* METHODS *************************

//------------ Index OF
// the index of return the position of a certain letter in the string zero based
// the first coincidence
console.log(airline.indexOf('i')); // 5
// the last coincidence
console.log(airline.lastIndexOf('i')); // 14
// whole words
console.log(airline.indexOf('Colombia')); // 8
console.log(airline.indexOf('colombia')); // -1  Uppercase Matters!

//------------ Slice
//the slice method is used to extract parts of the string WITHOUT CHANGING THE ORIGINAL
// usage : String.slice(begin, end)
console.log(airline.slice(4)); //Air Colombia (substring - part of the original)
console.log(airline.slice(4, 7)); //Air

console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Colombia
// if you use negative values, it start by the end
console.log(airline.slice(-2)); //ia
console.log(airline.slice(1, -1)); //AP Air Colombi

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😕');
  } else console.log(' You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// the methods come from boxing the string inside an object and then back
console.log(new String('jonas')); // String {'jonas'} (object)
console.log(typeof new String('jonas')); // object
console.log(typeof new String('jonas').slice(1)); //string
*/
