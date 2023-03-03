'use strict';
//////////////////////// WORKING WITH STRINGS part 3 ////////////////////////
// ------------Split
// its used to separatea strings in different varibles using a "key" to locate the cuts
console.log('a+very+nice+string'); //a+very+nice+string

console.log('a+very+nice+string'.split('+')); //(4) ['a', 'very', 'nice', 'string']

// store the resultatn variables from splitting
console.log('Jonas Schmedtmann'.split(' ')); //(2) ['Jonas', 'Schmedtmann']
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName); //Jonas
console.log(lastName); // Schmedtmann

// ------------ JOIN
// it joins the different strings and add an extra string in the joins
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // a second option
    //namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis'); //Jessica Ann Smith Davis
capitalizeName('cristian de la torre'); //Cristian De La Torre

// ------------ PADDING
// works to add certain caraters in order to reach the desired number

const message = 'Go to gate 23!'; //Go to gate 23!
const message2 = '123456789';
console.log(message2.padStart(5, '+')); // if there is more letters than minumun, it ignores the pad method

// .padStart
console.log(message.padStart(25)); //            Go to gate 23! (space is default)

console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!

// .padEnd
console.log(message.padEnd(25, '+')); // Go to gate 23!+++++++++++

//  .padStart AND .padEnd
console.log(message.padStart(25, '+').padEnd(40, '+'));
//+++++++++++Go to gate 23!+++++++++++++++

//Real Wold Example
const maskCreditCard = function (number) {
  const str = number + ''; // if one of the operants is a String, the opperation  returns the content as a string
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, '*');
};

console.log(maskCreditCard(4353324123)); // ******4123

console.log(maskCreditCard('3315231844')); //******1844

// ------------ Repeat

const messageWeather = 'Bad weather... All Departues Delayed... ';
console.log(messageWeather.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

//////////////////////// WORKING WITH STRINGS part 2 ////////////////////////
/*
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
console.log(trimmedEmail); // hello@jonas.io

// all in one
const normalizedEmail = LoginEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@jonas.io

console.log(email === normalizedEmail); // true

// Replacing parts of the strings

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); //288.97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

//replace more than 1 times using replaceAll
console.log(announcement.replaceAll('door', 'gate'));
// All passengers come to boarding gate 23. Boarding gate 23!

//replace more than 1 times using regular expressions  /expression/g
console.log(announcement.replace(/door/g, 'gate'));
//All passengers come to boarding gate 23. Boarding gate 23!

// Booleans

const plane = 'Airbus A320neo';
// includes
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); //false
// startsWith
console.log(plane.startsWith('Airb')); //true
console.log(plane.startsWith('AIRB')); //false  --> mayus MATTER
// endsWith
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practice Exercise

const checkBaggage = function (items) {
  // its common to put everything lowercase when getting imput from user
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage(' Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

*/

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
