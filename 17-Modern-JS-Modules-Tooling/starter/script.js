// Importing Module
// import './shoppingCart.js'; //this code is executed first

// ~~~~~~~ importing by name ~~~~~~~
// import { addToCart, totalPrize as price, tq } from './shoppingCart.js';
//export always need to happen in high level code
// addToCart('bread', 5); //5 bread added to the cart
// console.log(price, tq);

// console.log('Importing Module');
// //console.log(shippingCost); //shippingCost is not defined

// ~~~~~~~ importing by name all at once ~~~~~~~

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5); //5 bread added to the cart
// console.log(ShoppingCart.totalPrize); //237

// ~~~~~~~ importing by default (one thing only) ~~~~~~~

import add, { cart } from './shoppingCart.js';
add('pizza', 2); //2 pizza added to the cart
add('bread', 5);
add('apples', 4);

console.log(cart); // live connection
/*
(3) [{…}, {…}, {…}]
0: {product: 'pizza', quantity: 2}
1: {product: 'bread', quantity: 5}
2: {product: 'apples', quantity: 4}
*/

// --------- TOP LEVEL AWAIT -> only works on modules ---------
// async function(){}// (no asynch function needed)

// console.log('Start Fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something'); // the top level await is code-blocking

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost(); //Promise {<pending>}
// the function call is a promise, even though the promise is asynchronous the call is not, so its not defined when the reader go throught it
console.log(lastPost);

// Not very clean
//lastPost.then(last => console.log(last));

// More clean
const lastPost2 = await getLastPost();
console.log(lastPost2);
