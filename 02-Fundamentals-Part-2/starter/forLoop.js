// console.log('Lifting weigths repetition 1 🏋️‍♂️');
// console.log('Lifting weigths repetition 2 🏋️‍♂️');
// console.log('Lifting weigths repetition 3 🏋️‍♂️');
// console.log('Lifting weigths repetition 4 🏋️‍♂️');

/*
for (let rep = 1; rep <= 10; rep++) {

    console.log(`Lifting weigths repetition ${rep} 🏋️‍♂️`);
}





const messiArray = [
    'Lionel',  //name
    'Messi', //lastname
    2037 - 1991,  //age
    "Soccer Player", //job
    ['Ronaldhiño', 'Goku', 'Cortana'], //friends array
    true
];

const types = [];
const types2 = [];

//loop trough an array

for (i = 0; i < messiArray.length; i++) {
    //reading from messiArray
    console.log(messiArray[i], typeof messiArray[i]);



    //filling types array  method#2
    types[i] = typeof messiArray[i];
    //filling types array  method#2
    types2.push(typeof messiArray[i]);
}

console.log(types);
console.log(types2);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

*/


//el objeto en si es de tipo "object", por lo que numero -+ object = NaN,   su contenido puede ser de tipos diferentes por lo que si es un opbjeto de numeros, no es valio hacer 2 * arreglo , pero si lo es 2* arreglo[n]




//continue y break   CONTINUE  terminates the iteration, BREAK terminates the loop


const messiArray = [
    'Lionel',  //name
    'Messi', //lastname
    2037 - 1991,  //age
    "Soccer Player", //job
    ['Ronaldhiño', 'Goku', 'Cortana'], //friends array
    true
];




// CONTINUE se puede entender como "continue the loop without doing this" o "skip", en caso de cuplir la condicion se omite esa iteracion y se continua el loop

console.log("--------- ONLY STRINGS ----------");
for (i = 0; i < messiArray.length; i++) {

    if (typeof messiArray[i] !== 'string') continue;
    console.log(messiArray[i], typeof messiArray[i]);
}

// BREACK se entiende como " rompe definitivamente el loop". sale del loop

console.log("--------- quit if we find a number ----------");
for (i = 0; i < messiArray.length; i++) {

    if (typeof messiArray[i] === 'number') {
        console.log("we found a number: " + messiArray[i], typeof messiArray[i]);
        break;
    } else {
        console.log("this is not a number");
        console.log(messiArray[i], typeof messiArray[i]);
    }
}
