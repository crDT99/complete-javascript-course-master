'use strict';

/*
// method avaliable on the document object
// we pass the same selector like css
console.log(document.querySelector('.message'));
//the document.querySelector is an object of web APIs (out of JS), but we can use its method .textcontent to get the text inside that section
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉✨Correct Number!!';

document.querySelector('.number').textContent = '30';
document.querySelector('.score').textContent = 'papaya';

document.querySelector('.guess').value = 9;
console.log(document.querySelector('.guess').value);

*/

// an event is something that happens in the page
// the EventListener() is a listener that checks for events in the selected class, in this  time thw type of event we want to clech is the "click"

let secretNumber;

let score = 20;
let highScore = 0;

// ........  Function to generate the random number ........
const generateSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
generateSecretNumber(); // generates the secret number

// ........  Function to change the message  ........
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// ........  Function to change the number on the middle  ........
const changeNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// ******************* Check Button *******************
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // ------------------- No number placed -------------------
    //document.querySelector('.message').textContent = '⛔ No Number!!';
    displayMessage('⛔ No Number!!');
  } else if (guess === secretNumber) {
    // ------------------- Correct guess -------------------
    //document.querySelector('.message').textContent = '🎉✨ Correct Number!!';
    displayMessage('🎉✨ Correct Number!!');
    changeNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // ------------------- Incorrect guess -------------------
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > 1 && guess < 20
          ? guess > secretNumber
            ? // ------------------- Guess Bigger than number -------------------
              '📈 Too High'
            : // ------------------- Guess lower than number -------------------
              '📉 Too Low'
          : // ------------------- Guess out of limits -------------------
            ' It was just between 1 - 20. calm down 😴🛌';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// ******************* Again Button *******************

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style = null; //removes all the inline-added styles
  generateSecretNumber();
  score = 20;
  document.querySelector('.number').style = null; //removes all the inline-added styles
  changeNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
