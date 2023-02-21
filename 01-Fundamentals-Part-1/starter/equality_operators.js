
//  (===) extrict equality (no realiza coecion) x === z compara que x y z sean exatamente iguales en valor y tipo, y retorna un valor booleano


//  (==) loose equality (realiza coecion) x == y compara que x y z sean exatamente iguales solo en valor y retorna un valor booleano


//
const age = "18"; // the value is the same but the type is diferent

if (age === 18) //--> returns false
    console.log('you Just became an adult (strict)');

if (age == 18) //--> returns true
    console.log('you Just became an adult (loose)');

/*
const favouriteN_String = prompt("what's your favourite number?");
// prompt genera un campo de input y retorna el valor ingresado en tipo String
console.log(favouriteN_String);

*/

const favouriteN_String = "5"
const numberFive = 5

if (favouriteN_String === numberFive) {
    console.log("same value and type")
} else if (favouriteN_String == numberFive) {
    console.log("same value but different type")
} else {
    console.log("completely different")
}
