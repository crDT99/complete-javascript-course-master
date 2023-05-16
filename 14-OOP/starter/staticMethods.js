// static method on the constructors

// Array.from(...)  --> .from is static in the constructor Array
// [...].from(...) --> doesnt work

//Number.parseFloat(...) --> .parseFloat is static in the constructor of Number
// num x.parseFloat(...) --> doesnt work

// that means the method can only be used on the constructor, so its not herited by the objects created with that

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                            STATIC METHODS in clasic prototypal way
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// ~~~~~~ Static Method (on Person)

Person.hey = function () {
  console.log(
    'Hey there 🤟🤙, this is an static method on traditional classes'
  );
  console.log(this); // ---> person
};
// calling the static method from constructor
Person.hey();

//jonas.hey(); // error --> jonas.hey is not a function
// the object created doesnt inherit the method (BECAUSE THE METHOD IS NOT IN THE PROTOTYPE OF THE OBJECT, JUST IN THE CONSTRUCTOR)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                            STATIC METHODS in ES6 classes
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class PersonCL {
  // constructor method
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // METHODS

  // (INSTANCE METHODS)
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // ~~~~~~ (Static Methods)  --> not avaliable on instances (just constructor)

  static hey() {
    console.log('Hey there 🤟🤙, this is an static method on ES6 Classes');
    console.log(this); // ---> person
  }
}

// calling the static method from constructor
PersonCL.hey();
