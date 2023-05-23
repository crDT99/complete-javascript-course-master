'use strict';

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// we create an Object using any prototype as a reference Object.create(Prototype)

// OBJECT.CREATE  --> PARENT CLASS
const steven = Object.create(PersonProto);

// SAME PRINCIPLE BUT FOR THE PROTOTYPE OF THE CHILD CLASS
const StudentProto = Object.create(PersonProto);

// to set extra properties  you can create an init method
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');

jay.introduce(); //My name is Jay and I study Computer Science
jay.calcAge(); //27
