'use strict';

// 1) Public Fields
// 2) Private Fields
// 3) Public Methods
// 4) Private Methods
// there are static methods too

class Account {
  // 1) Public Fields (THEY WILL BE AT THE INSTANCES)
  locale = navigator.language;

  // 2) Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // FAKE PROTECTED PROPERTY

    // this._movements = [];
    // this._pin = pin;

    console.log(`Thanks for oppening an account, ${owner}`);
  }

  // 3) Public Methods
  // public interface / API
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#aproveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  // Fake protected Methods
  // _aproveLoan(val) {
  //   return true;
  // }

  // 4) Private Methods
  #aproveLoan(val) {
    return true;
  }

  // static --> will not be avaliable in the instances. just in the class
  static helper() {
    console.log('helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//interacting directly with the properties is not recommended , is better to create methods that make it for you
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);

// things that shoul not be accessible from outside
//console.log(acc1.#pin); --> Error
//console.log(acc1.#movements);  --> Error

// Must be called using a get method
console.log(acc1.getMovements()); //(3) [250, -140, 1000]

// trying to call the private method
// acc1.helper(); --> error helper is not a function

// static
Account.helper(); //helper

// -------------- CHAINING -----------------

// TO CHAIN METHODS IN AN OBJECT THE METHOD NEED TO RETURN THE OBJECT
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1);
