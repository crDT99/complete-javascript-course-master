/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//litral sintax to create arrays
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);


const years = new Array(1991, 1984, 2008, 2020)


console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
//to check the last element on the array
console.log(friends[friends.length - 1]);

//you can mutate (change) array elements, even if the array is const
friends[2] = 'Jay';
console.log(friends);


firstName = 'Lionel';
const messi = [firstName, 'Messi', 2037 - 1991, "Soccer Player", friends];

console.log(messi);

*/

// Exercice

const calcAge = function (birthyear) {
    return 2037 - birthyear;
}


const years = [1990, 1967, 2002, 2010, 2018];

// Not to do
calcAge(years);

//ok 
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];
console.log(ages);


