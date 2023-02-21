'use strict';
//-------------- Elements && variables --------------
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// -------------- Selecting elements --------------
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0'); // Ids use "#"
const diceEL = document.querySelector('.dice'); //Classes use "."
const btnNew = document.querySelector('.btn--new');
const btnNRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// getElementById is the same, bu faster for id's
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

//****************** FUNCTIONS *****************
// ** hide the dice **
const hideDice = function () {
  diceEL.classList.contains('hidden')
    ? console.log('ya esta oculto')
    : diceEL.classList.add('hidden');
};
// ** set score to 0 **
const setScoreZero = function () {
  score0EL.textContent = 0;
  score1EL.textContent = '0';
};
// ** generate a random number between 1-6 **
const GenerateRand = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const updateCurrentScoreEL = function (curScore) {
  document.getElementById(`current--${activePlayer}`).textContent = curScore;
};

const switchPlayer = function () {
  //Swich to the next player
  updateCurrentScoreEL(0);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player--active'); //if the class is there, it removes it, if not it adds the class
  player1EL.classList.toggle('player--active');
};

// STARTING CONDITIONS
setScoreZero();
hideDice();

// Rolling dice Functionallity
btnNRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = GenerateRand();

    //2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    console.log(`the number rolled is ${dice}`);

    //3. Check for rolled 1, if true, skip the turn
    if (dice !== 1) {
      // Add the dice to the current score
      currentScore += dice;
      updateCurrentScoreEL(currentScore);
    } else {
      //Swich to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player's score
    scores[activePlayer] += currentScore;

    // 2. check score is >= 100, if so finish the game or else switch player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  // 1. Set stored scores to zero
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;

  // 2. Reset initial conditions in DOM
  if (playing === false) {
    const winner = document.querySelector(`.player--${activePlayer}`);
    winner.classList.remove('player--winner');
    winner.classList.toggle('player--active');
  }
  switchPlayer();
  setScoreZero();
  hideDice();

  // 3. Update playing status
  playing = true;
});
