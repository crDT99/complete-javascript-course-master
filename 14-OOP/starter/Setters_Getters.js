// ASSESOR PROPERTIES
// GETTERS & SETTERS ARE FUNCTIONS THAT GET OR SET A VALUE

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                  GETTERS & SETTERS in clasic prototypal way
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  // to set a getter just add the "get" keyword
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//using the getter
// -> you dont have to invoke the getter as a method
console.log(account.latest); //300

//using the Setter
// the atribute doesnt need to be send
account.latest = 50;
console.log(account.movements); //[200, 530, 120, 300, 50]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                            GETTERS & SETTERS in ES6 classes
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class PersonCL {
  // constructor method
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods
  // IF OUTSIDE OF THE "CONSTRUCTOR FUNCTION", THEY WILL BE STORED ON THE PROTOTYPE ✔✔✔
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exist

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else alert(`${name} is not a full Name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCL('Jessica Davis', 1996);
console.log(jessica);

console.log(jessica.age); //41

const walter = new PersonCL('Walter White', 19965);
