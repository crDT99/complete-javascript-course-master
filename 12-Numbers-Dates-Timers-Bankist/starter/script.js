'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2023-04-21T23:36:17.929Z',
    '2023-04-23T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const formatMovementDate = function (date, locale) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDayPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return `today`;
  if (daysPassed === 1) return `yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    //const day = `${date.getDate()}`.padStart(2, 0);
    //const month = `${date.getMonth() + 1}`.padStart(2, 0);
    //const year = date.getFullYear();
    //return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    // formatted currency
    const formattedMovement = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movemenst__date"> ${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and logout user
    if (time === 0) {
      clearInterval(logOutTimer);
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = 0;
    }
    //decrease 1 second
    time--;
  };

  //set time to 5 Mins.
  let time = 120;

  // call the timet every second
  tick();
  const logOutTimer = setInterval(tick, 1000);
  return logOutTimer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
//currentAccount = account1;
//updateUI(currentAccount);
//containerApp.style.opacity = 100;

//experimenting with the API
/*
// ISO - Languaje Code Table
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  //month: 'numeric', //4
  // month: '2-digit', // 04
  month: 'long', // April
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language; // get the locale to format from the user navigator
console.log(locale);

//labelDate.textContent = new Intl.DateTimeFormat('en-GB').format(now); //24/04/2023
//labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now); //٢٤/٤/٢٠٢٣
labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);

//labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);//lunes, 24 de abril de 2023, 14:23


*/

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    // day/month/year
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };
    //const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //console.log('THIS IS TODAY: ' + now);
    //const dayN = `${now.getDate()}`.padStart(2, 0);
    //const monthN = `${now.getMonth() + 1}`.padStart(2, 0);
    //const yearN = now.getFullYear();
    //const hourN = `${now.getHours()}`.padStart(2, 0);
    //const minutesN = `${now.getMinutes()}`.padStart(2, 0);
    //labelDate.textContent = `${dayN}/${monthN}/${yearN}, ${hourN}:${minutesN}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // TIMER
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset the Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset the Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// -------------------- NUMBERS General Info --------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*

// IN JS ALL NUMBERS ARE FLOAT INTERNALLY

console.log(23 === 23.0); // true

// AND THEYRE STRORED IN A 64 BASE 2 FORMAT (BINARY)

// Base 10  = > 0-9
// Base 2  = >  0 , 1

console.log(0.1 + 0.2); //0.30000000000000004   XD?
console.log(0.1 + 0.2 === 0.3); //false  XDDDDD?

//string to number CONVERSION

// way 1
console.log(Number('23'));

//way 2
console.log(+'23');

// Parsing

//Number.parseInt(string,[ radix])  radix => numerycal system  ex: 10 => base 10

console.log(Number.parseInt('30px')); // 30 => number
// the string Mush start with a Number
console.log(Number.parseInt('e23')); // NaN

console.log(Number.parseInt(' 2.5rem ')); // 2
console.log(Number.parseFloat(' 2.5rem ')); // 2.5

// ~~~~~~~ check if something IS NOT A NUMBER  ~~~~~~~
// isNAN -> check if someting is NOT a Number (strings of numbers are valid)

console.log(Number.isNaN(20)); //false  -> is a number
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(20 / 0)); //infinity  -->  false

// ~~~~~~~  check if something IS A NUMBER ~~~~~~~
// isFinite -> check if someting is a Number in datatype AND if  it is a finite number

console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false

*/

//  -------------------- MATH AND ROUNDING --------------------

/*
// SQUARE ROOT

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

//cubic or more roots (n-root(x) = ( x ** (1/n)))

console.log(8 ** (1 / 3)); // 2

// GET THE MAX VALUE

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23 --> it does cohertion
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN --> but not parsing

// GET THE MIN VALUE
console.log(Math.min(5, 18, 23, 11, 2)); // 2

//calculate the area of a circle

console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

//random number between 1-6
console.log(Math.trunc(Math.random() * 6) + 1);

//function

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 15));

// Rounding intergers

// trunc --> just eliminates the decimal part
console.log(Math.trunc(23.3)); // 23

// rund --> round to the nearest
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// ceil --> round UP
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// floor --> round Down
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

// Floating points  -> DECIMALS

// toFixed determine the decimals to display  -> return strings
console.log((2.7).toFixed(0)); // "3"
console.log((2.7).toFixed(3)); // "2.700"

console.log((2.345).toFixed(2)); //"2.35"
console.log((2.7).toFixed(3)); //"2.700"
console.log(+(2.345).toFixed(3)); //2.345

// Reminder Operator

// returns the reminder of a division

console.log(5 / 2); // 2.5 => 5 =  2.5 * 2
console.log(5 % 2); //  1   => 5 = (2*2) + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666  => 8 = (2*3) + 2

// a number is EVEN if its reminder by 2 is zero

console.log(6 % 2); // 0 => EVEN
console.log(6 / 2); // 3

console.log(7 % 2); // 1 => ODD
console.log(7 / 2); // 3.5

const isEven = n => n % 2 === 0;

console.log(isEven(8)); //true
console.log(isEven(23)); // false
console.log(isEven(524)); //true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    // 0 ,2 ,4, 6, 8 , ....
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0 ,3, 6, 9 , ....
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

*/

//  -------------------- Numeric Separators --------------------

/*
// a feature used to separte very large numbers to make them readable

// 287 , 460 , 000  , 000
// numeric separators in JS are underScores "_"
const diameter = 287_460_000_000;

// the system ignores the underScores
console.log(diameter); //287460000000

const price = 345_99;
console.log(price); //34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

// you cannot put 2 in a row, or conected to a special character nor at the beggining/end
//const PI = 3._1415;  //error
//const PI = 3.1415_;  //error
//const PI = _3.1415;  //error

// it also doesnt work with strings
console.log(Number('230_000')); //NaN
console.log(parseInt('230_000')); //230

*/

//  -------------------- Big INT --------------------
/*
//  a primitive used to store numbers as long as needed

//biggest number JS can handle without problem is 9007199254740991

console.log(2 ** 53 - 1); //9007199254740991
// its stored as
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

// any bigger number is UNSAFE , losing presition
console.log(2 ** 53 + 1); //9007199254740992  -> shuld be 9007199254740993

// big int  can be set by ("n")

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// operations
console.log(10000n + 10000n); //20000n

console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
// console.log(huge * num); // error, bigInt cannot be operated with normal numbers
console.log(huge * BigInt(num)); //466666095457525752699451n

// Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false  --> the datatype is diferent  int != bigInt
console.log(typeof 20n); //bigint
console.log(20n == '20'); //true  --> the values are equal

console.log(huge + ' is REALLY big!!!');

//you cant use the MAth.operations in bigInt
//console.log(Math.sqrt(16n)); //error
console.log(Math.sqrt(Number.parseInt(16n))); //3.3333333333333335

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
*/

//  -------------------- Dates and Times --------------------

/*
// create a date
const now = new Date();
console.log(now); //Tue Apr 18 2023 14:32:34 GMT-0500

console.log(new Date('Apr 18 2023 14:32:34'));
console.log(new Date('December 24 2023')); //Sun Dec 24 2023 00:00:00 GMT-0500 (hora estándar de Colombia)

console.log(account1.movementsDates[0]); //2019-11-18T21:31:17.178Z

// the month is zero based
console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT-0500

// you can pass the  ammount of miliseconds since unix time began
console.log(new Date(0)); //Wed Dec 31 1969 19:00:00

// a date 3 days after
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Sat Jan 03 1970 19:00:00 GMT-0500

// Working with dates
// SYNTAX var= new Date(year, month, day , hours , minutes )

// ~~~~~~~~~~~~~~ Get Methods  ~~~~~~~~~~~~~~
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // day
console.log(future.getDay()); // weekday
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // 2037-11-19T20:23:00.000Z
console.log(future.getTime()); // timestamp :  miliseconds since Dec 31 1969

console.log(new Date(2142256980000));

console.log(Date.now());

// ~~~~~~~~~~~~~~ set metods ~~~~~~~~~~~~~~
console.log(future); //Thu Nov 19 2037
future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040

// setDay, setMonth, setHours , setMinutes .....

*/

//  -------------------- Operations with Dates and Times --------------------

/*

const future = new Date(2037, 10, 19, 15, 23);
// the date can be displayed as a timestamp

console.log(Number(future)); //2142274980000
console.log(+future); //2142274980000

// when we substract 2 dates the result is the timestamps in miliseconds and then we conver them to a valid date

const calcDayPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDayPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(days1); // 10   (days passed)

const days2 = calcDayPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

console.log(days2); // 10   (days passed)
*/

//  -------------------- Formatting Numbers --------------------

/*
const num = 3884764.23;

const options = {
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
//3,884,764.23 mph --> unit: 'mile-per-hour'

console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
//3.884.764,23 mi/h --> unit: 'mile-per-hour'

console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
//ميل/س٣٬٨٨٤٬٧٦٤٫٢٣ --> unit: 'mile-per-hour'

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
); //3.884.764,23 mi/h

*/

//  -------------------- Timers  --------------------

/*
// ~~~~~~~ setTimeout ~~~~~~~~~~~~

// schedule a function to run after a certain ammount of time  (ONCE)

const ingredients = ['olives', 'pepperonni'];

const pizzaTimmer = setTimeout(
  (ing1, ing2) =>
    console.log(`here is your pizza with ${ing1} and ${ing2} 🍕🍕🍕`),
  3000,
  ...ingredients
);

// 3 seconds after : here is your pizza with olives and pepperonni 🍕🍕🍕

console.log(' waiting...');

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimmer);
}

// ~~~~~~~ setInterval ~~~~~~~~~~~~

// schedule a function to run every  certain ammount of time  (multiple times)

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

*/
