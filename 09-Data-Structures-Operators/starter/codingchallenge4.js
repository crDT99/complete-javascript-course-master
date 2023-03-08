'use strict';
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
const array = [
  'underscore_case',
  'first_name',
  ' Some_Variable ',
  '   calculate_AGE',
  ' delayed_departure',
];

const multiCammel = function (words) {
  // if we are expecting sentences with multi "_"  we can separate the words by the "_" and then join the words uppercasing the first letters
  // we can trim now because the words are separrated, and we can split by ("_")
  const wordSeparate = words.trim().split('_');
  let StringFull = '';
  for (const [index, singleWord] of wordSeparate.entries()) {
    if (index != 0) {
      StringFull += singleWord[0].toUpperCase() + singleWord.slice(1);
    } else {
      StringFull += singleWord;
    }
  }
  console.log(StringFull);
  return StringFull;
};

const singleCammel = function (word) {
  // if we are expecting sentences with only one "_" we just need to find the index of the "_" and then split the string using the index as a reference
  word = word.trim();
  const indexRef = word.indexOf('_');
  word = word.replace('_', word[indexRef + 1].toUpperCase());
  const cammel = word.slice(0, indexRef + 1) + word.slice(indexRef + 2);
  return cammel;
};

const toCamelCase = function (imput) {
  let rep = 0;
  const camelcaseWords = []; // the array that will contain the final result

  // 1. convert the imput to string and we put all in lowercase and separate the different words using the  "/n" as key
  const wordsImput = String(imput);
  const normalizedImput = wordsImput.toLowerCase().split('\n'); // this creates an array of the diferent words

  // 2. we apply the multiCammel or singleCammel function
  // then we loop over the array of composed words
  for (const words of normalizedImput.values()) {
    rep++;
    // camelcaseWords.push(multiCammel(words));         //multiCammel
    camelcaseWords.push(singleCammel(words)); //singleCammel
    console.log(camelcaseWords[rep - 1].padEnd(20), '✅'.repeat(rep));
  }

  console.log(camelcaseWords);
};

document.querySelector('.btn-go').addEventListener('click', function () {
  const textI = document.querySelector('#textInput').value;
  toCamelCase(textI);
});
