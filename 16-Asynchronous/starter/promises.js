'use strict';

// Promises are a special kind of objects in JS
// new Promise(executerfunction(resolve,reject))
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🔮');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      // this function marks the promise as fullfilled
      resolve('You Win 💰🤑');
    } else {
      reject(new Error('You Lost your money 💩💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// --------------- Callback HELL ---------------

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// --------------- PROMISE - SOLUTION  ---------------
// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// insta solved promise
Promise.resolve('abc').then(x => console.log(x));
// insta rejected promise
Promise.reject(new Error('abc_R')).catch(x => console.log(x));
