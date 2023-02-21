// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

// Question 1: What is temp amplitude? Answer: difference between highest and lowest temp
// Question 2: how to compute max and min temperature
// Question 3: what is a sensor error and what to do with that?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = function (temps) {
  //how to find the max and min values in an array
  // search in google :v
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") {
      continue;
    }

    curTemp > max ? (max = curTemp) : (max = max);
    curTemp < min ? (min = curTemp) : (min = min);
  }
  console.log(`Max: ${max} Min: ${min}`);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

*/

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem

// - With 2 arrays, should we implement functionality twice?
//  ANS  :   NO! Just merge two arrays  ->  how to merge arrays?

const calcTempAmplitude2 = function (t1, t2) {
  //how to concatenate 2 arrays?
  // search in google :v
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") {
      continue;
    }

    curTemp > max ? (max = curTemp) : (max = max);
    curTemp < min ? (min = curTemp) : (min = min);
  }
  console.log(`Max: ${max} Min: ${min}`);
  return max - min;
};

const amplitudeNew = calcTempAmplitude2([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
