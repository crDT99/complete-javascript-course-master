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

//////////////////////////////////////////////
// Array Methods Practice

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EX #1 : calculate how mutch has been deposited in all accounts
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. take all the array "movements"  for every account

const bankDepositSum1 = accounts.map(acc => acc.movements);
//(4) [Array(8), Array(8), Array(8), Array(5)]
//0: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
//1: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
//2: (8) [200, -200, 340, -300, -20, 50, 400, -460]
//3: (5) [430, 1000, 700, 50, 90]

// ....

// 2. convert the array of arrays into a single array with all the values

const bankDepositSum2 = bankDepositSum1.flat();
//(29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

// ....

// 3. filter for only the positive values

const bankDepositSum3 = bankDepositSum2.filter(mov => mov > 0);
//(17) [200, 450, 3000, 70, 1300, 5000, 3400, 8500, 200, 340, 50, 400, 430, 1000, 700, 50, 90]

// ....

// 4. sum all the positive values to get the total

const bankDepositSum4 = bankDepositSum3.reduce((sum, curr) => sum + curr, 0);
//25180

// ....

// 5.  CHAIN AND SIMPLIFY

//  map + flat = flatMap
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);

//25180

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EX #2 : Count how many deposits of at least 1000 dollars have been
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. take all the array "movements"  for every account and put them into a single array (like above)

const numDeposit1 = accounts.flatMap(acc => acc.movements);

// ....

//2. filter the movements equal or bigger than 1M ang get the length

const numDeposit2 = numDeposit1.filter(mov => mov >= 1000);
//(6) [3000, 1300, 5000, 3400, 8500, 1000]

// ....

// 3. get the length
const numDeposit3 = numDeposit2.length;
// 6

// ....

// CHAIN AND SIMPLIFY

const numDeposit = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

// 6

// ...........  WAY 2 ...........

// 1. take all the array "movements"  for every account and put them into a single array (like above)

const numDep = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, curr) => (curr >= 1000 ? sum + 1 : sum), 0);

// 6

// Prefixed ++ operator

//let a = 10;
//console.log(a++); //10
//console.log(a); //11

//let a = 10;
//console.log(++a); //11
//console.log(a); //11

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EX #3 : create an object that creates the sum of the deposits and the withdrawals
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// you can set the initial value as an object or any other things, not only primitives

const sum = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      // its important to always return the acumulator
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sum); //{deposits: 25180, withdrawals: -7340}

// de-constucting
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      // its important to always return the acumulator
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals); //25180 -7340

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EX #4 : create function to convert any string to titlecase
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  //function to capitalize any string
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
