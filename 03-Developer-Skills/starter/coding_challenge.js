///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem

// QUESTION 1: How to go all the temperatures?  ANS: using For()

// QUESTION 2: How to add the temperatures in a string¡?   ANS: using string literals passing the values with ${arr[index]}

// QUESTION 3: How to concatenate the string into one

//SOLUTION

const printForecast = function (arr) {
  let fullstring = ``;
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    fullstring = fullstring.concat(
      `... ${temp}ºC in ${i + 1} day${+1 === 1 ? "" : "s"}`
    );
  }
  console.log(fullstring);
};

const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];

printForecast(array1);
printForecast(array2);
