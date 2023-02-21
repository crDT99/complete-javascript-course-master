'use strict';

/////////////////////////////////////////////////////////////
// ------------------ SCOPE  ------------------

/*
function calcAge(birthYear) {
  //the code inside the function is not executed until called
  const age = 2023 - birthYear;

  function printAge() {
    const output = ` ${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1999) {
      const str = `Oh, and you're kindda a millenial, ${firstName}`;
      var strvar = `this is a var, but Oh ....  you're kindda a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 3)); // error ( in strict mode  -- the functions are block-scoped)
    //  console.log(str);  // error
    console.log(strvar); // not affected by block scoping
  }

  printAge();

  return age;
}

const firstName = 'Cristian';
calcAge(1999);

*/

/////////////////////////////////////////////////////////////
// ------------------ HOISTING AND TDZ ------------------

/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

/////////////////////////////////////////////////////////////
// ------------------ THIS KEYWORD ------------------

/*
console.log(this);

//function
const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // undefined in strict mode ( if not strict mode, it displays the global object window)
};

calcAge(1999);

//arrow function

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // arrow function dont have his own "this" keyword, so it uses the this from his parent function/scope
};

calcAgeArrow(1980);

const cristian = {
  year: 1999,
  calcAge: function () {
    console.log(this); //the this keyword points to the object who calls the method
    console.log(2023 - this.year);
  },
};
console.log('****************');
cristian.calcAge();

const matilda = {
  year: 2017,
};

//method Borrowing
matilda.calcAge = cristian.calcAge;
matilda.calcAge(); //the this inside the method calcAge points to matilda because its the one who invoke the method

const f = cristian.calcAge;
f(); //the this inside the function is undefined, because strict mode, else it would be nan

*/
/*
//var firstName = 'Matilda';
//global scope
const cristian = {
  firstName: 'Cristian',
  year: 1999,
  calcAge: function () {
    //regular funcion
    //console.log(this);
    console.log(2023 - this.year);
    // ------------------- Solution One -------------------
    //const self = this; // self or this
    //const isMillenial = function () {
    //console.log(self);
    //console.log(this.year >= 1981 && this.year <= 1996); //not work
    // console.log(self.year >= 1981 && self.year <= 1996);
    //};
    // ------------------- Solution 2 -------------------
    const self = this; // self or this
    const isMillenial = () => {
      // arrow function inherits the this keayword from parent scope
      console.log(self);
      //console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial(); // inside a regular function call, the "this" is undefined
  },
  // arrow function
  greet: () => console.log(`hey ${this.firstName}`),
};

cristian.greet();
cristian.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

/////////////////////////////////////////////////////////////
// ------------------PRIMITIVES VS OBJECTS ------------------
/*
//primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//object
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);
*/

// Primitive Types
let lastName = 'Williams';
let oldLasatName = lastName;
lastName = 'Davis';
// each variable has its value associated with a piece of memory in the stack
console.log(lastName, oldLasatName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: ' Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

//Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: ' Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//function to merge 2 objects and get a new one!!
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jhon');

console.log('Jessica 2 Before marriage: ', jessica2);
console.log('Jessica 2 After marriage: ', jessicaCopy);
