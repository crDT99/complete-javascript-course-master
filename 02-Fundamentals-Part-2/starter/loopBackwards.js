
const messiArray = [
    'Lionel',  //name
    'Messi', //lastname
    2037 - 1991,  //age
    "Soccer Player", //job
    ['Ronaldhiño', 'Goku', 'Cortana'], //friends array
    true
];


/*
for (let i = messiArray.length - 1; i >= 0; i--) {
    console.log(messiArray[i], typeof messiArray[i]);
}

*/

// loop inside a loop

for (let exercice = 1; exercice < 4; exercice++) {
    console.log(`---------- Starting exercice #${exercice}----------`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`repetition #${rep}`);

    }
}