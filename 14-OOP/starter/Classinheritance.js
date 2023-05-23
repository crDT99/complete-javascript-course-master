// PARENT CLASS
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// CHILD CLASS
const Student = function (firstName, birthYear, course) {
  // Person(firstName, birthYear);
  // IN REGULAR FUNCTION CALLS, THE THIS KEYWORD IS SET TO "UNDEFINED"!!
  // so we need to specify the THIS KEYWORD USING CALL( this,  atribbutes)

  Person.call(this, firstName, birthYear); // parent class

  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  this.course = course;
};

// WE CREATE THE PROTOTYPE OF STUDENT BASED ON PERSON'S PROTOTYPE
Student.prototype = Object.create(Person.prototype);

// THEN WE ADD THE NEW (EXTRA) METHODS TO THE PROTOTYPE
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike); //Student {firstName: 'Mike', birthYear: 2020, course: 'Computer Science'}
mike.introduce(); //My name is Mike and I study Computer Science
mike.calcAge(); //17 --> GOOD

console.log(mike.__proto__); //Person {introduce: ƒ}  --> studentprototype
console.log(mike.__proto__.__proto__); //{calcAge: ƒ, constructor: ƒ} --> personprototype

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

// we define the constructor of student .prototype to student (it was person for some reason)
Student.prototype.constructor = Student;
