///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const juliaData = [5, 2, 4, 1, 15, 8, 3];
const kateData = [16, 6, 10, 5, 6, 1, 4];

// chained complete arrow && normal functions

function calcAverageHumanAge(ages) {
  const ageInHY = [];
  const mayorDogs = [];
  const avgMayorAge = ages
    .map(dogAge => {
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
