const firstName = 'Cristian';
const job = 'developper';
const birtyear = 1999;
let year = 2023

// -------------------------- traditional way --------------------------
console.log("---------traditional way--------");
// single line
const cristianS = " I'm " + firstName + ', a ' + (year - birtyear) + ' years old ' + job + '!!';
console.log(cristianS);

//multi line
const cristianM = " I'm " + firstName + " a \n\ " + (year - birtyear) + ' years old \n\ ' + job + '!!';
console.log(cristianM);

// --------------------------template literals strings--------------------------
console.log("---------template literals strings--------");

// single line
const cristianTS = `I'm ${firstName}, a ${year - birtyear} years old ${job} !!`;
console.log(cristianTS)

//multi line

const cristianTM = `I'm ${firstName}, a 
${year - birtyear} years old
${job} !!`;
console.log(cristianTM)