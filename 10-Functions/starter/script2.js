///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

///////////////////////////////////////
// Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

///////////////////////////////////////
// More Closure Examples

// Example 1

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f); // closure of function g  (variable a)

// Re-assigning f function
h();
f();
console.dir(f); // closure of function h  (variable b)

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  //setTimeout(function() , x_milisecons )
  //execute the function inside after X miliseconds
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const pergroup = 1000; // this is not used, because closure has priority over scope chain
boardPassengers(180, 3);
/*
  --- the log is executed before the callback function
Will start boarding in 3 seconds

script2.js:85 We are now boarding all 180 passengers
script2.js:86 There are 3 groups, each with 60 passengers

*/
