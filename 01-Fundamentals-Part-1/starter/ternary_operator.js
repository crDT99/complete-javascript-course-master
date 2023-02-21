// The ternary Operator is equivalent to an if-else statemet but all in a single line
const age = 19;
const likeAlcohol = true;
// Condition ? Positive_Output : Negative_Output
age >= 18 ? console.log('I can drink wine 🍷') : console.log('I can drink Soda 🥤');

//if-else equivalent

let drinkif
if (age >= 18) {
    drinkif = 'wine 🍷';
} else {
    drinkif = 'Soda 🥤';
}

// as an operator it generates a value that can be stored
const drink = age >= 18 ? 'wine 🍷' : ' Soda 🥤';

// so we can use it iside a template literal or any stament that needs a value
console.log(`I like to drink ${age >= 18 && likeAlcohol ? 'wine 🍷' : ' Soda 🥤'}, when I go to a party`);


