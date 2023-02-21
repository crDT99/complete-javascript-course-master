'use strict';

const friends = ['Michael', 'Steven', 'Peter'];

// -------------  Add Elements ------------------

// push añade un elemento AL FINAL del arreglo y retorna la longitud del nuevo arreglo
console.log(friends.push('Jay'));  //OUTPUT 4
//array (4) ['Michael', 'Steven', 'Peter', 'Jay']


// unshift añade un elemento AL INICIO del arreglo y retorna la longitud del nuevo arreglo
console.log(friends.unshift('Laura')); //OUTPUT 5
//array (5) ['Laura', 'Michael', 'Steven', 'Peter', 'Jay']



// -------------  Remove Elements ------------------

// pop elimina el ultimo elemento del arreglo  (opuesto a add), no requiere atributos, retorna el elemento removido
console.log(friends.pop()); //OUTPUT Jay
//array (4) ['Laura', 'Michael', 'Steven', 'Peter']



// shift elimina un elemento AL INICIO del arreglo y retorna el elemento removido
console.log(friends.shift()); //OUTPUT Laura
//array (3) ['Michael', 'Steven', 'Peter']


// -------------  Find Elements ------------------

// indexOf  retorna el indice de una entrada en el arreglo en caso de existir, en caso contrario retorna -1
// array : ['Michael', 'Steven', 'Peter']

console.log(friends.indexOf('Steven')); //OUTPUT 1

console.log(friends.indexOf('Antonio')); //OUTPUT -1

// includes retorna true o false dependiendo si la entrada solicitada se encuentra dentro del arreglo, la comparacion es estricta (===)


console.log(friends.includes('Steven')); //OUTPUT true

console.log(friends.includes('Antonio')); //OUTPUT false