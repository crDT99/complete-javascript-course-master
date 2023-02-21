/*
for (let rep = 1; rep <= 10; rep++) {

    console.log(`Lifting weigths USING FOR repetition ${rep} 🏋️‍♂️`);
}


//while loop :  loop runs as long as condition is true
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weigths USING WHILE repetition ${rep} 🏋️‍♂️`);
    rep++;
}

*/


// THE WILE LOOP is good, when youre not using counters or dont know the number of repettitions

let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1)
    if (dice === 6) {
        console.log(" this is a 6, the loop is about to end");
    }
}
