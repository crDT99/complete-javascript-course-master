/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
*/

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;


// Body Mass Index   ( formula 1)

const mBodyMass1 = markMass / markHeight ** 2
const jBodyMass1 = johnMass / johnHeight ** 2

console.log("Body mass index 1:  mark: " + mBodyMass1.toFixed(2) + " kg/m jhon: " + jBodyMass1.toFixed(2) + " kg/m")
// Body Mass Index   ( formula 1)

const mBodyMass2 = markMass / (markHeight * markHeight);
const jBodyMass2 = johnMass / (johnHeight * johnHeight);

console.log("Body mass index 2:  mark: " + mBodyMass2.toFixed(2) + " kg/m jhon: " + jBodyMass2.toFixed(2) + " kg/m")

//----------------- If-Else & Template Literals -----------------

if (mBodyMass1 > jBodyMass1) {
    console.log(`Mark's BMI (${mBodyMass1.toFixed(2)}) is higher than Jhons's (${jBodyMass1.toFixed(2)}) according to the formula 1`)
} else {
    console.log(`Jhons's BMI (${jBodyMass1.toFixed(2)}) is higher than Mark's (${mBodyMass1.toFixed(2)}) according to the formula 1`)
}


if (mBodyMass1 > jBodyMass1) {
    console.log(`Mark's BMI (${mBodyMass2.toFixed(3)}) is higher than Jhons's (${jBodyMass2.toFixed(3)}) according to the formula 2`)
} else {
    console.log(`Jhons's BMI (${jBodyMass2.toFixed(3)}) is higher than Mark's (${mBodyMass2.toFixed(3)}) according to the formula 2`)
}
