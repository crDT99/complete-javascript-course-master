'use strict';

// constructor functions  --> create objects programatically

// arrow functions DOES NOT work
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS
  //this.calcAge = function(){console.log(2037 - this.birthYear);}

  //This creates a copy of the method in each and every object  ( literally a written copy) -> is beter to add the function to the prototype, this way every object can use it but its written only ONCE
};

//the only diference between normal functions and construction functios is that construction functions are ALWAYS CALLED USING "NEW" KEYWORD

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// Things that happen when you call a function using "NEW"
// {} =  object
//  1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype  ---> creates  .__proto__ property
// 4. fucntion automatically return {}

//Jonas is an instance of person?
console.log(jonas instanceof Person); //true

// other instances
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

// Prototypes
console.log(Person.prototype);

//every function created in Js has a property called "Prototypes", and every object created with a constructed function will have acces to the atributtes and methods defined in the constructor property

// ++++++++  WE CAN ADD METHODS TO THE PROTOTYPE  ++++++++
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// now the objects created with the constructor "person" will inherit the prototype with the function "calcAge" using it from the prototype

console.log(jonas.__proto__); //{calcAge: ƒ, constructor: ƒ}

jonas.calcAge(); //46

// __proto__  REVEALS THE OWN PROTOTYPE
//.prototype  REVEALS THE PROTOTYPE OF ITS LINKED OBJECTS

console.log(jonas.__proto__ === Person.prototype); //true

//Person.prototype is the prototype for the instances created with the cosntructor (THE PROTOTYPE OF ITS LINKED OBJECTS)

console.log(Person.__proto__ === Person.prototype); //false
//BUT  Person.prototype  != Person.__proto__

//  ++++++++  WE CAN ADD ATRIBUTES (PORPERTIES) TO THE PROTOTYPE TOO  ++++++++
Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species); //Homo Sapiens Homo Sapiens

// now the objects instanciated can acces to the new property, BUT THE PROPERTY IS NOT INSIDE THE OBJECT DIRECTLY

console.log(jonas); //{firstName: 'Jonas', birthYear: 1991}

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false

// Prototypal Inheritance

//prototype chain

// jonas prototype
console.log(jonas.__proto__); //{species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}

// general objects prototype
console.log(jonas.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// null -> general objects prototype does not have prototype.  is the top of the chain
console.log(jonas.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor); //Person(firstName, birthYear)

// prototype of arrays
const arr = [3, 6, 7, 3, 4, 9, 6, 7, 6, 9, 6, 4]; // new Array === []

console.log(arr.__proto__);

// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight:ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toReversed: ƒ toReversed()
// toSorted: ƒ toSorted()
// toSpliced: ƒ toSpliced()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// with: ƒ with()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object

// ARRAY CONSTRUCTOR

console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}  (OBJECT COSNTRUCTOR)

//create a new method for ALL THE ARRAYS

//its possible but not recommended
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr); //[3, 6, 7, 3, 4, 9, 6, 7, 6, 9, 6, 4]
console.log(arr.unique()); //[3, 6, 7, 4, 9]

// select DOM elements

const h1 = document.querySelector('h1');

console.dir(x => x + 1);
