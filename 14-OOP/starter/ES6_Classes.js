// ES6 CLASSES

// class Experssion

//const PersonCL = class {};

// class Declaration
class PersonCL {
  // constructor method
  constructor(firstName, birthYear) {
    this.firstName = firstName;
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
}

const jessica = new PersonCL('Jessica', 1996);
console.log(jessica);

jessica.calcAge();
console.log(jessica.__proto__ === PersonCL.prototype); //true

//add an extra method manually

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet(); //Hey Jessica

// function declaration are  hoisted BUT Classes are not Hoisted
// first-Class Citizes () -> we can pass and return them from functions
// classes are executed in strict-mode (always)
