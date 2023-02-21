
const messiObject = {
    firstName: 'Lionel',
    lastName: 'Messi',
    birthYear: 1987,
    job: "Soccer Player",
    friends: ['Ronaldhiño', 'Goku', 'Cortana'],
    hasDriverLiscense: true,
    //key (property) : value


    // function as an atribute of an object with external parameter --> must be an expression
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },

    // the reserved word "this" makes reference to the object that is invoking it
    calcAgeinternal: function () {
        return 2037 - this.birthYear;
    },

    // we can claculate and declarate properties of de object inside a function
    calcAgedef: function () {
        this.age = 2037 - this.birthYear; //this creates a new property and assign the value 
        return this.age;
    },

    getSummary: function () {
        return `Messi is a ${this.calcAgedef()}-years old ${this.job}, and he has ${this.hasDriverLiscense ? "a" : "no"} driver's license :3`;
    }

};

console.log('using external parameters');
// invoking the function inside the object calcAge
console.log(messiObject.calcAge(1987));
console.log(messiObject['calcAge'](1987));


console.log('using this');
// invoking the function inside the object calcAgeinternal
console.log(messiObject.calcAgeinternal());
console.log(messiObject['calcAgeinternal']());

// this define a new parameter inside the object or change it if already exist
console.log('using a new parameter inside the object');
// invoking the function inside the object calcAgeinternal
console.log(messiObject.calcAgedef());
console.log(messiObject['calcAgedef']());
console.log(messiObject);

// test sentence
console.log(messiObject.getSummary());