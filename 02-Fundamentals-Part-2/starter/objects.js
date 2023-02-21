// the basic data structure  array can store multiple value types

const messiArray = [
    'Lionel',  //name
    'Messi', //lastname
    2037 - 1991,  //age
    "Soccer Player", //job
    ['Ronaldhiño', 'Goku', 'Cortana'] //friends array
];

// the arrays in javacript can contain multiple data types, but ypou cannot associate them with a place holder

//--------------------- OBJECTS ---------------------

// *** OBJECT DECLARATION ***

// Object literals

const messiObject = {
    firstName: 'Lionel',
    lastName: 'Messi',
    age: 2037 - 1991,
    job: "Soccer Player",
    friends: ['Ronaldhiño', 'Goku', 'Cortana']
    //key (property) : value
}


// *** OBJECT OPPERATORS ***

//invoking the full object
console.log(messiObject);

//invoking the object properties

//Dot Notation 
console.log(messiObject.lastName);
//Bracket Notation ---> you can add a expression computed 
console.log(messiObject['lastName']);

//example
const nameKey = 'Name';
console.log(messiObject['first' + nameKey]);
console.log(messiObject['last' + nameKey]);

//add properties to an object

messiObject.team = 'PSG';  //Dot Notation 
messiObject['apodo'] = "La Pulga"; //Bracket Notation

console.log(messiObject);


// Mini-Challenge
console.log(`${messiObject.firstName} alias ${messiObject.apodo} tiene ${messiObject.friends.length} amigos, y su mejor Amigo es: ${messiObject.friends[0]}`);
