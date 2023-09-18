// Exporting Module

console.log('Exporting Module');

// Blocking Code
// console.log(`start fetching Users`);
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log(`Finish fetching users`);

// scope => Module
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

// export multiple thing with name exports
const totalPrize = 237;
const totalQuantity = 23;
export { totalPrize, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
