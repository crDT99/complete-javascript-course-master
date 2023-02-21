const bill_array = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [], totals = [];

//funcion de la forma #1
function calcTip(bill) {
    let tip
    if (bill >= 50 && bill <= 300) {
        tip = bill * (15 / 100);
    }
    else {
        tip = bill * (20 / 100);
    }

    return tip;
}


//funcion de la forma #2
const calcTip2 = function (bill) {
    let tip
    if (bill >= 50 && bill <= 300) {
        tip = bill * (15 / 100);
    }
    else {
        tip = bill * (20 / 100);
    }

    return tip;
}

//funcion de la forma #3

const calcTip3 = bill => (bill >= 50 && bill <= 300) ? //condition
    (bill * (15 / 100)) //yes
    :
    (bill * (20 / 100)); //no

//funcion de la forma #3.5

const calcTip4 = bill => bill >= 50 && bill <= 300 ? 15 / 100 : 20 / 100;


// funcion para calcular el promedio (Average)
function calcAverage(arr) {
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        avg += arr[i];
    }
    avg /= arr.length;
    return avg;
}


// for que rellena los arreglos de tips
for (let index = 0; index < bill_array.length; index++) {

    const tip = calcTip(bill_array[index])
    tips.push(tip);
    totals.push(bill_array[index] + tip);
    //console.log(`calculo #${index}`);
}

const averageCalculated = calcAverage(totals);
const averageTips = calcAverage(tips);

console.log("----------------- ORIGINAL BILL ---------------------");
console.log(bill_array);
console.log("----------------- TIPS ARRAY ---------------------");
console.log(tips);
console.log("----------------- BILL WITH TIP ---------------------");
console.log(totals);
console.log("----------------- AVERAGE ---------------------");
console.log(averageCalculated);
console.log("----------------- AVERAGE TIPS ---------------------");
console.log(averageTips);