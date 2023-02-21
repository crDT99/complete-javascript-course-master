const hasDriversLicense = true;  // A
const hasGoodVision = false;     // B
const isDrunk = false;

// operador and
console.log(hasDriversLicense && hasGoodVision); //retorna false
// operador or
console.log(hasDriversLicense || hasGoodVision); //retorna true
// operador not
console.log(!hasDriversLicense); //retorna false
console.log(!hasGoodVision); //retorna true

//example

const shouldDrive = hasDriversLicense && hasGoodVision && !isDrunk;
if (shouldDrive) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Sarah cannot drive!")
}