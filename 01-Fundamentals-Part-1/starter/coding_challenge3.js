// Dolphins vs Koalas

const dolphinScoreM1 = 96;
const dolphinScoreM2 = 130;
const dolphinScoreM3 = 89;

const koalaScoreM1 = 0;
const koalaScoreM2 = 10;
const koalaScoreM3 = 9;

const dolphinsAverage = (dolphinScoreM1 + dolphinScoreM2 + dolphinScoreM3) / 3
const koalasAverage = (koalaScoreM1 + koalaScoreM2 + koalaScoreM3) / 3

if (dolphinsAverage <= 100 && koalasAverage <= 100) {
    console.log(`there's no winner :(, both teams are under 100 pts, the Dolpins have ${dolphinsAverage} and the Koalas have ${koalasAverage}`)
} else if (dolphinsAverage === koalasAverage) {
    console.log(`there is a draw!! boht teams have the same average score of: ${dolphinsAverage}`)
} else if (dolphinsAverage > koalasAverage) {
    console.log(`the Dolphins win the tournament!! with an average score of: ${dolphinsAverage}`)
} else if (dolphinsAverage < koalasAverage) {
    console.log(`the Koalas win the tournament!! with an average score of: ${koalasAverage}`)
}


