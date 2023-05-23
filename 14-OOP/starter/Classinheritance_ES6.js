// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PARENT CLASS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Child CLASS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//to make the StudentClass inherit from PersonClass We need to use the keyword "EXTENDS"
// this already links the prototype
class StudentCL extends PersonCL {
  // **** the constructor is needed if we are adding new propetyes ****
  constructor(fullName, birthYear, course) {
    // then we dont need to call the function PersonCL.call(...)
    // we use instead the SUPER FUNCTION  as we whoul use the parent calss normally

    super(fullName, birthYear); //this needs to happen first --> sets the "this" keyword
    this.course = course;
  }

  // methods
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `Im ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge(); //25
