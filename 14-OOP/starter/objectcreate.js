// OBJECT.CREATE  manually set the prototype of an object to any other object

// create a prototype object literal
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// then we create an Object using any prototype as a reference Object.create(Prototype)

const steven = Object.create(PersonProto);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge(); //35 --> WORKED!!

console.log(steven.__proto__ === PersonProto); //true

// now using an init function

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); //58

// OBJECT.create CREATES AN OBJECT USING THE PROTOTYPE THAT WE PASS
