//Type conversion  :  we manually convert from one type to another
//suppose an input field in a UI to write the birthyear -> comes in string type


const imputYear = '2000';  //string tyoe

console.log(imputYear + 18); // since mputYear is a string the output is 200018

console.log(Number(imputYear) + 18)  // now its a number that you can add 

console.log(Number("test")) //the output is  NAN  (not a number)

console.log(String(23)); // convert a number into string

//Type coercion : JS automatically convert the type for us

//with type coercion
console.log("Im " + 23 + " years old");
//without type coercion
console.log("Im " + String(23) + " years old");


// if there is a number string, the "+" operator converts all to strings and concatenate them
// if there is a number string, the "-" operator converts all to numbers and execute the operation


// --------------------- Truthly & Falsy values -----------------------------

// 5 falsy values : 0, '' , undefined, null , NaN   --> they are not "False", but will become false if evaluated

console.log(Boolean(0));  //--> false
console.log(Boolean('')); //--> false
console.log(Boolean('a')); //--> True
console.log(Boolean(undefined)); //--> false
console.log(Boolean(null)); //--> false
console.log(Boolean(NaN)); //--> false

//example of the validation of a variable

//let height  //--> false
//let height = 1;   //--> True
let height = 0; //--> false

if (height || height == 0) {               // since 0 is a falsy value, it will consider it false in the if stament, so if thats not the idea, the condition must be added
    console.log(" YAY! Height is defined")
} else {
    console.log(" Woops! Height is undefined")
}