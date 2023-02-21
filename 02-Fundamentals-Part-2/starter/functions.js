//functions in js are like functions in math

/*

FUNCTION 
// parameter = placeholder of the imput in a fuction
// argument actual value that enters into the function

function logger() {
    //function body
    console.log('My name is Cristian')
}

//callling / running / invoking function
logger();


function fruitProcessor(apples, oranges) {

    console.log(apples, oranges);

    const juice = ` Juice with ${apples} apples and ${oranges} oranges. `;

    return juice;
}



const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/

/*
// FUNCTION DECLARATION
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);

// FUNCTION EXPRESSION
//as an expression the function only produces a value, it has no name declared (anonymous function)

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1999);
console.log(age2);
*/


// --------------------------FUNCTIONS CALLING FUNCTIONS--------------------


function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples); // calling the function
    const orangePieces = cutFruitPieces(oranges); // calling the function


    const juice = ` Juice with ${apples} apples and ${oranges} oranges using  ${applePieces} applePieces and ${orangePieces} orangePieces. `;

    return juice;
}

// calling the function
//fruitProcessor(apples, oranges)
console.log(fruitProcessor(2, 3));
