
// FUNCTION DECLARATION
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}


// ARROW FUNCTION 

const yearUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`;
}


console.log(yearUntilRetirement(1999, 'Lucho'));
console.log(yearUntilRetirement(1980, 'Bob'));