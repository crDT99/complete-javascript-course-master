'use strict';
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('************** #1 *******************');

let Str = 'This is the goal summary: ';
// 1. For-of IN ARRAYS: deconstructing the entries of array goals
for (const [index, element] of game.scored.entries()) {
  // in the array we use array.entries() and in the object we use Object.entries(object)
  Str = Str.concat(`\nGoal #${index + 1}: ${element} `);
}

console.log(Str);

console.log('************** #2 *******************');
let avg = 0,
  sum = 0;
const numberOfElements = Object.keys(game.odds).length;

// 2. For-of IN OBJECTS: getting keys and values separetely
for (const element of Object.values(game.odds)) {
  //console.log(element);
  sum += element;
}

avg = sum / numberOfElements;
console.log(`the average odd for this match is: ${avg.toFixed(2)}`);

// 3. deconstructing an Object
//console.log(Object.entries(game.odds));
/* 
['team1', 1.33]
['x', 3.25]
['team2', 6.5]
*/
console.log('************** #3 *******************');
for (const [key, element] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${key === 'x' ? 'drawn' : 'victory'} ${game[key] ? game[key] : ''}: 
    ${element}`
  );
}

// Bonus
console.log('************** Bonus *******************');
const scorers = {};

for (const key of Object.values(game.scored)) {
  scorers[key] = scorers[key] ? (scorers[key] += 1) : 1;
}

console.log(scorers);
