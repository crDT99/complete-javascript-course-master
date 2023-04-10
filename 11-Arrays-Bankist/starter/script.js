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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const mov = sort ? movements.slice().sort((a, b) => a - b) : movements;
  mov.forEach(function (mov, index) {
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

const calcPrintBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} €`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  //interest only come in the deposits
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((interest, i, arr) => {
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest);
  labelSumInterest.textContent = `${interest} €`;
};

const createUserNames = function (accs) {
  // as we dont want to create a new array, just loop the array and do something in the original, que use forEach
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(accounts);

const updateUI = function (account) {
  // Display Movements
  displayMovements(account.movements);
  // Display Balance
  calcPrintBalance(account);
  // Display Summary
  calcDisplaySummary(account);
};

// Event handler

let currentAccount;
btnLogin.addEventListener('click', function (event) {
  //prevent form from submitting
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear imput fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiberAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiberAcc &&
    currentAccount.balance >= amount &&
    receiberAcc?.username !== currentAccount.username
  ) {
    // Doing the Transfer
    currentAccount.movements.push(-amount);
    receiberAcc.movements.push(amount);

    // update User Interface
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    console.log('Elligible');

    // Add Movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername?.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // findindex is diferent from indexOf() because despitee both return the index of something its possible to put any kind of text inside findindex as well as it returns boolean
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index, ' delete');

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Setting fields back to blanc
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

//////////////////////////////////////////////////////////////////////////////

//************************** ForEach **************************

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

// ------------------------ data transformation methods ------------------------
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////////////////////////////////////////////

//************************** Array Map Method **************************

// STRUCTURE ---- array.map(function(value, key, array){....} ); ----- STRUCTURE

// the method Array.Map allows to CREATE A NEW ARRAY from a given function, applied to the original array (the one that called the method)

/*
const eurToUsd = 1.2;

//array.map(function(value, key, array){....} );
const movementUSD = movements.map(function (mov) {
  return Math.round(mov * eurToUsd);
  // return 23;
});
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementUSD); //[240, 540, -480, 3600, -780, -156, 84, 1560]

//----------- same but using forOf 
const movementUSDfor = [];
for (const mov of movements) {
  movementUSDfor.push(Math.round(mov * eurToUsd));
}
console.log(movementUSDfor); //[240, 540, -480, 3600, -780, -156, 84, 1560]

//----- Array Map Method using arrow function -----

const movementUSD_Arrow = movements.map(mov => Math.round(mov * eurToUsd));
console.log(movementUSD_Arrow); //[240, 540, -480, 3600, -780, -156, 84, 1560]

const movementsDescriptions = movements.map((movement, i, array) => {
  if (movement > 0) {
    return ` Movement: ${i + 1} you deposited  $${movement}`;
  } else {
    return ` Movement: ${i + 1} you withdrew  $${Math.abs(movement)}`;
  }
});

console.log(movementsDescriptions);

 //[
  //' Movement: 1 you deposited  $200',
  //' Movement: 2 you deposited  $450',
  //' Movement: 3 you withdrew  $400', 
  //' Movement: 4 you deposited  $3000', 
  //' Movement: 5 you withdrew  $650', 
  //' Movement: 6 you withdrew  $130', 
  //' Movement: 7 you deposited  $70', 
  //' Movement: 8 you deposited  $1300'
 //]
*/
//////////////////////////////////////////////////////////////////////////////

//************************** Filter Method **************************
/*
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]

// STRUCTURE ---- array.filter(function(currentElement, index, array){}) ----- STRUCTURE

const deposits = movements.filter(function (mov, i, array) {
  return mov > 0;
});
console.log(deposits); //[200, 450, 3000, 70, 1300]

//-- same but using for-of

const depositfor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositfor.push(mov);
  }
}

console.log(depositfor); //[200, 450, 3000, 70, 1300]

// ------------ array of withdrawals

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // [-400, -650, -130]
*/

//************************** Reduce Method **************************
//te reduce method make a sum of all the elements inside the array and returns it as a simple value

/*
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
//STRUCTURE---- array.reduce(function(accumulator,currentElement, index, array){}, startValue) ----- STRUCTURE

//acumulator -> is the variable stored the acumulated sum (works as snowball)
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur; // each loop we sum the current into the acumulator
}, 0);

//Iteration 0: 0
//script.js:367 Iteration 1: 200
//script.js:367 Iteration 2: 650
//script.js:367 Iteration 3: 250
//script.js:367 Iteration 4: 3250
//script.js:367 Iteration 5: 2600
//script.js:367 Iteration 6: 2470
//script.js:367 Iteration 7: 2540

console.log(balance);
//3840

//----------- same but using forOf
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2); //3840

// since REDUCE boils down the array into a single number, itcan be any number NOT JUST THE SUM

// use the reduce method to get the maximun value of the movements

const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max); //3000
*/

//************************** Chaining Methods **************************
/*
//its not a good practicve to chain methods that mutates the original array
// we want to take all the deposit (positive values and then convert them to USD)

// PIPELINE
const eurToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  //  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => Math.round(acc + mov), 0);

console.log(totalDepositUSD); //5522

*/

//************************** Find Method **************************
/*
// needs a callback function that returns a boolean, but DONT RETURN A WHOLE ARRAY, instead it RETURNS JUST THE FIRST ELEMENT THAT SATISFY THE CONDITION

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]

console.log(firstWithdrawal); // -400  --> the first element with the condition

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// --- same but using for-of

let accountfound;

for (const account of accounts) {
  if (account.owner === 'Jessica Davis') accountfound = account;
}
console.log(accountfound);

*/

//************************** Find Index Method **************************

//return the index of an element but NOT THE ELEMENT ITSELF

//************************** Some and Every **************************
//

/*
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]

// EQUALITY
// test for equality => check of any number in the array is equal to -130
console.log(movements.includes(-130)); // true

// CONDITION
// test for a condition? use array.some

// -------------- SOME
// the some elements returns true if ANY (one) of the elements satisfy the condition
const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

// you can use the some for testing equality too
console.log(movements);

// -------------- EVERY
// the some elements returns true if ALL of the elements satisfy the condition

// movements array [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.every(mov => mov > 0)); //false

// account 4 array [430, 1000, 700, 50, 90]
console.log(account4.movements.every(mov => mov > 0)); //true

//separate callbacks
const deposit = mov => mov > 0;

console.log(movements.some(deposit)); //true
console.log(movements.every(deposit)); //false
console.log(movements.filter(deposit)); //[200, 450, 3000, 70, 1300]

*/

//************************** Flat  **************************

/*
// the FLAT method removes the nested arrays and returns a flattened array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

// BUT the flat method only goes 1 level deep  by default when flattening the array
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); //[Array(2), 3, 4, Array(2), 7, 8]

// to fix that we can specify the depht value in arguments
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

// **************** example using bank accounts

// fin the balance in ALL the movements of all the accounts

const accountsMovements = accounts.map(acc => acc.movements);
// store the moevements of all accounts in a new variable in a nested way
console.log(accountsMovements);
//(4) [Array(8), Array(8), Array(8), Array(5)]
//0: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
//1: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
//2: (8) [200, -200, 340, -300, -20, 50, 400, -460]
//3: (5) [430, 1000, 700, 50, 90]

// solve it using the flat method
const allMovements = accountsMovements.flat();
console.log(allMovements);
//(29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

//sum the values
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance); //17840

// Process Chained

const overallBalanceChain = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalanceChain); //17840

//************************** FlatMap  **************************

// is the equivalent to array.map().flat() , improved for performance

const overallBalanceChainFlatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalanceChainFlatMap); //17840

*/

//************************** Sort Method  **************************

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// is a JS build in method to sort arrays, it does MUTATE the original array, it convert all to Strings and then it make the sorting

// STRINGS
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// Sorted the strings by Alphabet
console.log(owners.sort()); //['Adam', 'Jonas', 'Martha', 'Zach']

//it does MUTATE the original array
console.log(owners); // ['Adam', 'Jonas', 'Martha', 'Zach']

// NUMBERS
// by default sort method does nt work on numbers

console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

// to work in numbers its needed a callback function

// sorting Ascending

//movements.sort((a, b) => {
//if (a > b) return 1; // keep order
//if (b > a) return -1; // switch order
//});

// Solution improved
movements.sort((a, b) => a - b);
console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

// sorting Descending
//movements.sort((a, b) => {
//if (a > b) return -1; // keep order
//if (b > a) return 1; // switch order
//});

// Solution improved
movements.sort((a, b) => b - a);
console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]
