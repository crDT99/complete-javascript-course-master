'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    // -- insertAdjacentHTML
    // this method inserts html into a container to create a dom element

    //document.querySelector(".containerClass").insertAdjacentHTML(Placeinsert,  htmlString)
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//-------------------- ARRAY METHODS --------------------
/*

let arr = ['a', 'b', 'c', 'd', 'e'];
//let arr = [0,  1,   2,   3,   4];
//************* Slice*************

// --   array.slice(start,end)  --  --> the start is taken into account but the end not

// Slice: creates a new Array by making a copy segment of the original at the given values
// -- slice does not mutate the original array
console.log(arr.slice(2)); // (3) ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // (2) ['c', 'd']
console.log(arr.slice(-2)); // (2) ['d', 'e']
console.log(arr.slice(-1)); //['e']
console.log(arr.slice(1, -2)); //['b', 'c']

//you can use the slice method to create a copy of an array

const arrCopyBySlice = arr.slice();
console.log(arrCopyBySlice); //(5) ['a', 'b', 'c', 'd', 'e']

// but this can be also be made by THE split operator "..."

const arrCopyBySplit = [...arr];
console.log(arrCopyBySplit);

//************* Splice*************

// --   array.splice(start,#Of_Elemements_to_Delete)  --

// Splice works by taking out a part of the array leaving on the ORIGINAL only the rest

// -- splice mutates the original

//console.log(arr.splice(2)); // ['c', 'd', 'e']
//console.log(arr); //['a', 'b'] // the original loses the part extracted

arr.splice(-1);
console.log(arr); //['a', 'b', 'c', 'd']

arr.splice(1, 2);
console.log(arr); //['a', 'd']

//************* REVERSE *************
arr = ['a', 'b', 'c', 'd', 'e'];

// -- Reverse mutates the original
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']
console.log(arr2); //['f', 'g', 'h', 'i', 'j']

//************* CONCAT *************

const letters = arr.concat(arr2);
console.log(letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// but this can be also be made by THE split operator "..."
console.log([...arr, ...arr2]); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//************* CONCAT *************
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j


//************* AT *************
const arr = [23, 11, 64];
// -- array.at(n) is the modern equivalent of the bracket notation
console.log(arr[0]); //23
console.log(arr.at(0)); //23

// getting the last element of the array
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64

console.log('jonas'.at(0)); // j

*/
//-------------------- Looping on ARRAY  --------------------
/*
 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//************* For-Of *************
console.log('------------------- FOR-OF ------------------- ');
for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited  $${movement}`);
  } else {
    console.log(`you withdrew  $${Math.abs(movement)}`);
  }
}

//************* ForEach *************

console.log('------------------- ForEach ------------------- ');
//looping the array using ForEach
// ForEach is a high-order function that pass each element of the array as an argument for the callback function
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`you deposited  $${movement}`);
  } else {
    console.log(`you withdrew  $${Math.abs(movement)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// 3: function(3000)
// ...

/// ------------  WHAT IF WE NEED INDEXES TOO? --------------

//************* For-Of *************
console.log('------------------- FOR-OF ------------------- ');
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(` Movement: ${index + 1} you deposited  $${movement}`);
  } else {
    console.log(` Movement: ${index + 1} you withdrew  $${Math.abs(movement)}`);
  }
}

//************* ForEach *************
console.log('------------------- ForEach ------------------- ');
// --   array.forEach(function (movement, index, array) {  --
//looping the array using ForEach
// ForEach is a high-order function that pass each element of the array as an argument for the callback function

// ------ array.forEach(function (currentElement, index, Entirearray)

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(` Movement: ${i + 1} you deposited  $${mov}`);
  } else {
    console.log(` Movement: ${i + 1} you withdrew  $${Math.abs(mov)}`);
  }
});

//************* ForEach in Maps ands Sets *************

// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
  // USD : United States dollar
  // EUR : Euro
  // GBP : Pound sterling
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key} : ${value}`);
  // USD : USD
  // GBP : GBP
  // EUR : EUR

  // in sets, as it doent have keys, the values are the same as the keys so it could be called
  //currenciesUnique.forEach(function (value, _, set) {  (_ means an innesesary value)
});

*/
