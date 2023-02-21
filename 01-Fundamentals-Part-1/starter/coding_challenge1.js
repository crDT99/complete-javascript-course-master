const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

// Body Mass Index   ( formula 1)

const mBodyMass1 = markMass / markHeight ** 2
const jBodyMass1 = johnMass / johnHeight ** 2

console.log("Body mass index 1:  mark: " + mBodyMass1.toFixed(2) + " kg/m jhon: " + jBodyMass1.toFixed(2) + " kg/m")
// Body Mass Index   ( formula 1)

const mBodyMass2 = markMass / (markHeight * markHeight);
const jBodyMass2 = johnMass / (johnHeight * johnHeight);

console.log("Body mass index 2:  mark: " + mBodyMass2.toFixed(2) + " kg/m jhon: " + jBodyMass2.toFixed(2) + " kg/m")


const markHigherBMI = mBodyMass1 > jBodyMass1;
console.log("mark has higher bmi?  : " + markHigherBMI);