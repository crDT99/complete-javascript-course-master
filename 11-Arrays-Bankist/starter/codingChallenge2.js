///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const juliaData = [5, 2, 4, 1, 15, 8, 3];
const kateData = [16, 6, 10, 5, 6, 1, 4];

/*
function calcAverageHumanAge(ages) {
  // 1. MAP METHOD

  // We use the MAP METHOD to map a new array based on the original, but changing the ages according to the given function to calcaulate human-equivalent ages in dogs

  const ageInHY = ages.map(function (dogAge) {
    const humanAge = dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
    return humanAge;
  });
  console.log('human-equivalent ages: ' + ageInHY);

  // 2. FILTER METHOD

  // We use the FILTER METHOD to filter the dogs whose human-equivalent ages are equal or bigger than 18
  const mayorDogs = ageInHY.filter(function (ageH) {
    return ageH >= 18;
  });
  console.log('bigger than 18: ' + mayorDogs);

  // 3. REDUCE METHOD

  // We use the REDUCE METHOD to Calculate the total sum of human-age of all adult dogs

  const allMAyorAgeSum = mayorDogs.reduce(function (accumulator, adultDogAge) {
    return accumulator + adultDogAge;
  }, 0);
  console.log('total sum of human-age only in adult dogs: ' + allMAyorAgeSum);

  // and then we calculate the average age of all the adult dogs

  const avgMayorAge = Math.round(allMAyorAgeSum / mayorDogs.length);
  console.log('average age: ' + avgMayorAge);
}

console.log(' ----------------- juliaData ----------------- ');
calcAverageHumanAge(juliaData);
console.log(' ----------------- kateData ----------------- ');
calcAverageHumanAge(kateData);


 */

// chained complete arrow && normal functions

function calcAverageHumanAge(ages) {
  const ageInHY = [];
  const mayorDogs = [];
  const avgMayorAge = ages
    .map(function (dogAge) {
      const dogHY = dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
      ageInHY.push(dogHY);
      return dogHY;
    })
    .filter(ageH => ageH > 18)
    .reduce(function (accumulator, adultDogAge, iterator, entryArray) {
      const avgAcum = accumulator + adultDogAge / entryArray.length;
      mayorDogs.push(adultDogAge);
      return avgAcum;
    }, 0);
  console.log('human-equivalent ages: ' + ageInHY);
  console.log('bigger than 18: ' + mayorDogs);
  console.log('average adult-dogs age: ' + avgMayorAge);
}

console.log(' ----------------- juliaData ----------------- ');
calcAverageHumanAge(juliaData);
console.log(' ----------------- kateData ----------------- ');
calcAverageHumanAge(kateData);
