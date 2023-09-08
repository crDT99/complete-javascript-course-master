'use strict';
/*
console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test End');

    Test Start 
    Test End  // the top level code runs first

    Resolved promise 1  //promises are in microtask queue
    // microtask queue has priority over callback queue 

    0 sec timer // callback resolves at the end
*/

console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('Test End');

/*

Test Start
Test End
Resolved promise 1

// long wait ...
Resolved promise 2
0 sec timer

*/
