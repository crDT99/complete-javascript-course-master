///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

// current > (recommended * 0.90) && current < (recommended * 1.10)

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// ............. evaluates if a certain dog is eating to much or too little .............

const evaluateFood = function (Dog) {
  const current = Dog.curFood;
  const recom = Dog.recomFood;

  if (current > recom * 0.9 && current < recom * 1.1) {
    return 0;
  } else if (current < recom * 0.9) {
    return -1;
  } else if (current > recom * 1.1) {
    return 1;
  }
};

// ............... get a string with the multiple owners of a dog ...............
const printOwners = function (DogOwners) {
  return DogOwners.join(' and ');
};

// ............... get the text according to the dogs food evaluation ...............

const printFoodEvaluation = function (owners, evaluation) {
  //evaluation of the dog is : 0 = normally , 1 = too much , -1 = too litle
  // log to the console the result
  console.log(` ${printOwners(owners)}'s Dog is eating ${
    evaluation === 0
      ? 'Normally!!'
      : evaluation === -1
      ? 'too little!!'
      : evaluation === 1
      ? 'too much!!'
      : ''
  }
`);
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. calculate the recommended food portion for every dog
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// as we dont want a new array, we use FOREACH
dogs.forEach(dog => {
  dog.recomFood = Math.floor(dog.weight ** 0.75 * 28);
});

console.log(dogs);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//2. Find if Sarah's dog is eating too much or too little
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//2.1 find Sarah's Dog

// course solution
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

const SarahsDog =
  dogs[dogs.findIndex(dog => dog.owners.find(dogOw => dogOw === 'Sarah'))];

//2.2  check if its eating too much or too little

printFoodEvaluation(SarahsDog.owners, evaluateFood(SarahsDog)); //Sarah's Dog is eating too much

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 3. array of dog-owners according to dog food
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// course solution

//const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood)
//.flatMap(dog => dog.owners);

//const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood)
//.flatMap(dog => dog.owners);

// Own Solution using Reduce
const { ownersEatTooMuch, ownersEatTooLittle, ownersEatNormal } = dogs.reduce(
  (acumObj, curr) => {
    // we get the evaluation for every dog
    const evaluation = evaluateFood(curr);

    // based on evaluation we sort if the dog eats to mutch or too litle
    console.log(evaluation);
    acumObj[
      evaluation === 1
        ? 'ownersEatTooMuch'
        : evaluation === -1
        ? 'ownersEatTooLittle'
        : 'ownersEatNormal'
    ].push(...curr.owners);

    // its important to return the acummulator
    return acumObj;
  },
  {
    ownersEatTooMuch: [],
    ownersEatTooLittle: [],
    ownersEatNormal: [],
  }
);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log(ownersEatNormal);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 4. Log a string to the console for each array created in 3
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
printFoodEvaluation(ownersEatTooMuch, 1);
printFoodEvaluation(ownersEatTooLittle, -1);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 5. Log if there is any dog eating EXACTLY the amount of food that is recommended
//(true or false)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const exactFoodDogsBoolean = dogs.some(dog => dog.curFood === dog.recomFood);
console.log(
  'there are any dog eating EXACTLY the amount of food that is recommended: ' +
    exactFoodDogsBoolean
);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 6. log if there is any dog eating an OKAY amount of food
//(true or false)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const okFoodDogsBoolean = dogs.some(dog => evaluateFood(dog) === 0);
console.log(
  'there is any dog eating an OKAY amount of food: ' + okFoodDogsBoolean
);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 7. Create an array containing the dogs that are eating an OKAY amount of food
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const okFoodDogs = dogs.filter(dog => evaluateFood(dog) === 0);
console.log(...okFoodDogs);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const sorted = dogs.slice().sort((a, b) => {
  const condition =
    a.recomFood > b.recomFood ? 1 : a.recomFood < b.recomFood ? -1 : 0;

  return condition;
});
console.log(sorted);
//(4) [{…}, {…}, {…}, {…}]
//0: {weight: 8, curFood: 200, owners: Array(1), recomFood: 133}
//1: {weight: 13, curFood: 275, owners: Array(2), recomFood: 191}
//2: {weight: 22, curFood: 250, owners: Array(2), recomFood: 284}
//3: {weight: 32, curFood: 340, owners: Array(1), recomFood: 376}
