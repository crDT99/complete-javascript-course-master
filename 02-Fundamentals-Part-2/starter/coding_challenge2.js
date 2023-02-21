'use strict';

const bill_array = [125, 555, 44];
// importante inicializar los arrays para que funcionen
let tip_array = [];
let total_bill_array = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? 15 : 20;


for (let index = 0; index < bill_array.length; index++) {

    tip_array.push(bill_array[index] * calcTip(bill_array[index]) / 100);

    total_bill_array[index] = bill_array[index] + (bill_array[index] * calcTip(bill_array[index]) / 100);

}

console.log(`This is the original bill array ${bill_array}`);
console.log(`Those are the calculated tips ${tip_array}`);
console.log(`This is the total bill + tip array ${total_bill_array}`);