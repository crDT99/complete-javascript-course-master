// section 2 coding challenge #1
'use strict';
// const dolphinScoreM1 = 44;
// const dolphinScoreM2 = 23;
// const dolphinScoreM3 = 71;

// const koalaScoreM1 = 65;
// const koalaScoreM2 = 54;
// const koalaScoreM3 = 49;


const dolphinScoreM1 = 85;
const dolphinScoreM2 = 54;
const dolphinScoreM3 = 41;

const koalaScoreM1 = 23;
const koalaScoreM2 = 34;
const koalaScoreM3 = 27;


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const checkWinner = (averageT1, nameT1, averageT2, nameT2) => {

    if (averageT1 >= 2 * averageT2) {
        console.log(` The ${nameT1} Won!!  ( ${averageT1} Pts vs ${averageT2} Pts ) against ${nameT2} `);

    } else if (averageT2 >= 2 * averageT1) {
        console.log(` The ${nameT2} Won!!  ( ${averageT2} Pts vs ${averageT1} Pts ) against ${nameT1} `);
    } else {
        console.log(`we have no winner this time 😓😓😓  ( ${averageT1} Pts vs ${averageT2} Pts )`);
    }

}


// calling the arrow function

checkWinner(calcAverage(dolphinScoreM1, dolphinScoreM2, dolphinScoreM3), "Dolphins", calcAverage(koalaScoreM1, koalaScoreM2, koalaScoreM3), "Koalas");
