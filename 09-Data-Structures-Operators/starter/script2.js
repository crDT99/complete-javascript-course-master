'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

///////////////////////////////////////////////////////////////////////////////
// -------------------- The For-Of Loop--------------------

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// cicle to all elements inside the menu ( you can use continue and break)
console.log('------------NORMAL FOR-OFF------------');
for (const item of menu) {
  console.log(item);
}

// access to the index too
//console.log([...menu.entries()]);
console.log('------------FOR-OFF WITH INDEX------------');
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// using DESTRUCTURING
console.log('------------FOR-OFF AND DESTRUCTURING------------');
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//result: 
//1: Focaccia
//2: Bruschetta
//3: Garlic Bread
//4: Caprese Salad
//5: Pizza
//6: Pasta
//7: Risotto


*/

///////////////////////////////////////////////////////////////////////////////
// -------------------- Enhanced Object Literals --------------------

// 3 ways to write better object literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // ------------------------------ #3 Enhance ------------------------------
  // the property names can be computted
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  nameRestaurant: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ------------------------------ #1 Enhance ------------------------------
  //we can write an external object as an atributte only by adding the name
  //before ES6
  //openingHours: openingHours,

  //ES6 enhanced object literals
  openingHours,

  // ------------------------------ #2 Enhance ------------------------------
  // we can declarate methods using method() , no necesary to create a variable and asign a function

  //before ES6
  //order: function (starterIndex, mainIndex) {return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];},
  //ES6 enhanced object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '00:00',
    address = 'no adress',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
///////////////////////////////////////////////////////////////////////////////
// -------------------- Looping Objects --------------------
//***************** Using Object.Keys **************
// property NAMES = keys  --> return only the property names (keys)
const properties = Object.keys(openingHours);
// get an array of the values inside the object
console.log(properties);
/*
  Object.keys(openingHours) --> [key]

    (3) ['thu', 'fri', 'sat']
    0: "thu"
    1: "fri"
    2: "sat"
*/
console.log(properties[0], properties[1], properties[2]);
// ['thu', 'fri', 'sat']
console.log(properties[0][0]); // t

let openStr = `we are open on ${properties.length} days: `;
// loop inside the object with For-of
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr); // we are open on 3 days: thu, fri, sat,

//***************** Using Object.values **************
//Property VALUES --> return all the values inside the keys
const values = Object.values(openingHours);
console.log(values); //(3) [{…}, {…}, {…}]
/*
Object.values(openingHours) --> [value]

[
    {"open": 12,"close": 22},
    {"open": 11,"close": 23},
    {"open": 0,"close": 24}
]
*/
console.log(values[0], values[1], values[2]);
//{open: 12, close: 22} {open: 11, close: 23} {open: 0, close: 24}

//***************** Using Object.entries **************
// the entries return the index number AND the element
// Entire Object
const entries = Object.entries(openingHours);
console.log(entries); // (3) [Array(2), Array(2), Array(2)]
/*
Object.entries(openingHours) --> [key, value]
[
    ["thu", {"open": 12,  "close": 22}],
    ["fri", {"open": 11,  "close": 23}],
    ["sat", {"open": 0,   "close": 24}]
]

*/

//
// destructuring to get the object
// for (const [key, value] of entries) {
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////////////////////////////////////////////
// -------------------- Optional Chaining --------------------
/*
// restaurant.openingHours  does not have mon
//console.log(restaurant.openingHours.mon.open); //  ERROR

// and suppose openingHours is optional too, so an if must be used to run correctly
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// in ES6 we can use the optional chaining, where undefined is return as soon as a certain property does not exist

// ******* Using Optional Chaining *******
// check for mon's existence
console.log(restaurant.openingHours.mon?.open); //undefined
// check for mon's and openingHours existence
console.log(restaurant.openingHours?.mon?.open); //undefined
// ONLY if the property before ? then the next property is evaluated

//Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open =
    restaurant.openingHours[day]?.open ?? ' no hour, we are closed :(';
  console.log(` On ${day}, we open at ${open}`);
}

// Optional Chaining On Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //check if the method exist before calling it
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); //Method does not exist

// Optional Chaining On Arrays

const users = [
  //array of objects
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

//********************** 3 WAYS ***********
// #1. using optional chaining and nullish operator
console.log(users[0]?.name ?? 'User array empty');

// #2. using if
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('user array empty');
}

// #3. using ternary
users.length > 0 ? console.log(users[0].name) : console.log('user array empty');
*/
