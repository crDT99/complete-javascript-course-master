'use strict';

// in ES6 the SETS and MAPS were introduced to javascript
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
//BUILD-IN  DATA STRUCTURES

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ************************* SETS *************************
/*
// a set is a collection of unique values, so can never have any duplicates and the order of the elements is irrelevant
// a set
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}
console.log(ordersSet.size); // 3 size ----- in arrays we use .lenght and in Sets we use .size
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

// IN SETS, THERE ARE NO INDEXES!! BECAUSE EVERY VALUE IS UNIQUE
//console.log(ordersSet[0]);   ---> //UNDEFINED

// sets are iterables, so you can loop through them
for (const order of ordersSet) {
  console.log(order);
}

// a common use to SETS is to remove duplicate values of arrays
// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);
//console.log(staffUnique); // {'Waiter', 'Chef', 'Manager'}

// -----------------  SETS TO ARRAYS ----------------------
// as SETS are iterables and the spread operator works on iterables, we can say:
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);
// to JUST know how may things (whithout duplicates) are in an array
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']));

*/
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ************************* MAPS :FUNDAMENTALS *************************
/*
// in JS the Maps are a data structures used to map values to keys (like in objects)

// both in objects and in maps dara is stored in key value pairs. but the big diference is that IN MAPS, THE KEYS CAN BE ANY-TYPE AND IN OBJECTS IT CAN BE ONLY STRINGS

// in MAPS the key could be anything, like objects, arrays or even another Maps

// example

const rest = new Map(); //constructor
//the common way to create a map is to create an empty map and then fill it later

//////////////////////////////// METHODS ////////////////////////////////

// ------------------------------ MAP.SET ----------------------------
// to define information in the map WE USE SET like:  MAP.set(KEY, VALUE)
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy'); //the set method add, update and also returns the map
console.log(rest.set(2, 'Lizbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are closed :(');
// ------------------------------ MAP.GET ----------------------------
// TO GET INFORMATION FROM THE MAP, we use GET like:  MAP.get(KEY)
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('true')); // undefined  ---> the variable type matters
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// ------------------------------ MAP.HAS ----------------------------
// TO CHECK IF A MAP CONTAINS A VALUE, we use MAP.has(KEY)

console.log(rest.has('categories'));

// ------------------------------ MAP.DELETE && MAP.CLEAR ----------------------------
// TO DELETE A VALUE IN THE MAP, we use MAP.delete(KEY)
// TO DELETE ALL THE VALUES, we use MAP.clear();
rest.delete(2);
//rest.clear();
//console.log(rest); // key 2 is not there anymore

// ------------------------------ MAP.SIZE ----------------------------
// TO GET THE SIZE OF THE MAP, we use MAP.size
console.log(rest.size);

//object or array as a key
rest.set([1, 2], 'Test');
console.log(rest);
//
console.log(rest.get([1, 2])); // undefined  --> does not work because in heap, the 2 arrays are different despite theyre written the same way
// to use it correctly you have to make ssure its THE SAME OBJECT (in memory)
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
// DOM as a key
console.log(rest.get(arr));
*/

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ************************* MAPS : ITERATIONS *************************

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try Again!'],
]);
console.log(question);

// convert Object to MAP
console.log(Object.entries(openingHours));
/*
//the entries of an Object are an array the same way as the definition for the MAP above 

(3) [Array(2), Array(2), Array(2)]

0: (2) ['thu', {…}]
1: (2) ['fri', {…}]
2: (2) ['sat', {…}]

so its posible to use them to declare a new MAP:
*/
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quizz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

//const answer = Number(prompt('your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(answer === question.get('correct')));

// Convert MAP to Object
console.log([...question]);
/*
        [ key , value]
0: (2) ['question', 'What is the best programming language in the world?']
1: (2) [1, 'C']
2: (2) [2, 'Java']
3: (2) [3, 'JavaScript']
4: (2) ['correct', 3]
5: (2) [true, 'Correct! 🎉']
6: (2) [false, 'Try Again!']
*/
console.log(question.entries());
/*
    { key => value}
0: {"question" => "What is the best programming language in the world?"}
1: {1 => "C"}
2: {2 => "Java"}
3: {3 => "JavaScript"}
4: {"correct" => 3}
5: {true => "Correct! 🎉"}
6: {false => "Try Again!"}
*/
console.log([...question.keys()]); // ['question', 1, 2, 3, 'correct', true, false]

console.log([...question.values()]); // ['What is the best programming language in the world?', 'C', 'Java', 'JavaScript', 3, 'Correct! 🎉', 'Try Again!']
