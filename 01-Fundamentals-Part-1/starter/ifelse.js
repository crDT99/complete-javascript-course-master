const age = 23;
// if-else control Structure

if (age >= 18) {
    console.log("The person can start driving license 🏎️");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Please wait another ${yearsLeft} years =P`);
}

let century // se define afuera por que no se puede acceder a una variable declarada dentro de una estructura como if-else desde afuera

const birthYear = 1999;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);