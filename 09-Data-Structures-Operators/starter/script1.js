'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  nameRestaurant: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
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
// -------------------- Logical Assignment Operators --------------------
/*
const rest1 = {
  name: 'Capri',
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};


// OR assignment operator
//rest1.numGuest ||= 10; // same as:   rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest ||= 10; // same as:   rest2.numGuest = rest2.numGuest || 10;

//  as "0" is falsy, it will take it for a false stament
// to avoid that, you can use the logical Nulish coalescing the same way

rest1.numGuest ??= 10; //  nulish assignment operator contemplates the 0 or ""
rest2.numGuest ??= 10;

// THE AND operator shortcircuit when the first value is falsy
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'; //same as:  rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>'; //same as:  rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);
*/

///////////////////////////////////////////////////////////////////////////////
// -------------------- Nulish coalescing --------------------
// the nulish coalescing is an operator used to evaluate values when 0 or "" must not be taken as false
/*
restaurant.numGuest = 0; // zero its a falsy
const guest = restaurant.numGuest || 10; //return 10
console.log(guest);
// Nullish: block null and undefined (NOT 0 or "")
const guessCorrect = restaurant.numGuest ?? 10; // nulish coalescing "??"
console.log(guessCorrect);
*/

///////////////////////////////////////////////////////////////////////////////
// -------------------- Short Circuiting --------------------

/*
// "||" or "&&" operator use any data type, return ANY data type, its used to evaluate data and when short-circuit it will return this value without evaluating the second one, if not, the second value is evaluated. if none of the values satisfy the condition, the last value is returned

// OR (||)
// *********** the operator OR ||  shortcircuit (return) if the first value is truth or thuthy ********
console.log('---- OR (||) ----');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); //  jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// hello   -> because is the first thruthly value, so it "shortcircuit the chain"

//restaurant.numGuest = 23;
//default value ternary operator
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);
//default value using shortcircuit
const guess2 = restaurant.numGuest || 10;
console.log(guess2);

// AND
// *********** the operator AND (&&) ||  shortcircuit (return) if the first value is false or falsy ********
console.log('---- AND (&&) ----');
// returns
console.log(0 && 'Jonas'); //0
console.log('Hello' && 23 && null && 'Jonas'); // null
// console ( truthly && truthly && falsy && truthly ) => falsy

console.log(7 && 'arroz' && 7 && 'Jonas'); //Jonas (cause none satisfy the falsy)

//using if (classical) to see if a method exist
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// using shortcircuit
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
///////////////////////////////////////////////////////////////////////////////
// -------------------- Rest Parents --------------------
//the resta parent is also "..." but its used to collect multiple elements and condense them into an arrray (to pack things)
/*
// SPREAD, beacause on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

// 1. De-structuring
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
//create an object with the week days openning hours
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
// we want a funtion that can receive x ammount of arguments and "compress" them in an array
const add = function (...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

/*



///////////////////////////////////////////////////////////////////////////////
// -------------------- SPREAD OPERATOR --------------------
// the spread operator "...", separates all the elements inside an  Iterables, (so its used to umpack things) : arrays, strings, maps, sets. NOT objects  (but it can be used in objects too)
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); // (5) [1,2,7,8,9]
console.log(...newArr); // 1,2,7,8,9

// create a new array taking other as a refrence and adding things
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// its used to create copys of arrays or merge arrays together
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays or more
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu);

// spread in string

const str = 'Jonas';
const letters = [...str, ' ', 's'];
console.log(letters);
console.log(...str);

// console.log(`${...str} Schmedtmann`); // doesnt work, ${} does not expect multiple values



//  spread in Objects

const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; //copy of the restaurant object
restaurantCopy.nameRestaurant = 'Ristorante Roma';
console.log(restaurant.nameRestaurant);
console.log(restaurantCopy.nameRestaurant);




const ingredients = [
  //prompt("Let's make pasta! Ingredient 1? "),
  //prompt('Ingredient 2?'),
  //prompt('Ingredient 3?'),
];
console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);  // normal way
restaurant.orderPasta(...ingredients); //spread operator

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol ,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sol ,21',
  starterIndex: 1,
});


*/

///////////////////////////////////////////////////////////////////////////////
// -------------------- DESTRUCTURING OBJECTS --------------------
/*
// to de-structure objects we use {}, and the order does not matter
const { nameRestaurant, openingHours, categories } = restaurant;

console.log(nameRestaurant, openingHours, categories);

// asign the values from the object to variables with different name
const {
  //variableinObject : newname = [defaultValue]
  nameRestaurant: restaurantName = [],
  openingHours: hours = [],
  categories: tags = [],
} = restaurant;

console.log(restaurantName, hours, tags);
// Default Variables
const { menu = [], starterMenu: Starters = [] } = restaurant;
console.log(menu, Starters);
// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // its necesary to warp the asingment {} into parenthesis
console.log(a, b);

// Nested Objects

const {
  fri: { open: o = [], close: c = [] },
} = openingHours;
console.log(o, c);
*/

///////////////////////////////////////////////////////////////////////////////
// -------------------- DESTRUCTURING ARRAYS --------------------
// De-structuring : EA6 way of umpacking values in a separate values
/*
//normal assignment array to value
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring
const [a1, b1, c1] = arr;
// js takes a1, b1 and c1 as separate variables

console.log(a1, b1, c1);
console.log(arr);

//const [first, second] = restaurant.categories;
//console.log(first, second);

const [first, , third] = restaurant.categories;
console.log(first, third);
*/

// ********* example *********
// suppose the restaurant has a main and secondary category

/*
// ----- normal way -----
let mainNormal = restaurant.categories[0];
let secondaryNormal = restaurant.categories[2];
console.log(mainNormal, secondaryNormal);
// ** now you want to switch between main and secondary
const temp = mainNormal;
mainNormal = secondaryNormal;
secondaryNormal = temp;
console.log(mainNormal, secondaryNormal);

// ----- de-structing way -----
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// ** now you want to switch between main and secondary
[main, secondary] = [secondary, main]; //switching variables
console.log(main, secondary);
*/

//receive 2 return values from a function
/*
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// ----- de-structing nested arrays -----
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// ----- de-structing  arrays without knowing the size  -----

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
