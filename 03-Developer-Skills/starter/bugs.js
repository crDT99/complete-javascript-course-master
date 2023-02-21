const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY the bug
console.log(measureKelvin());
// the output is a concatenated string of the input and 273 (should be a sum)

// ----------------- Bigger Problem to test ---------------------
console.log("--------------------------------------------");
//using a Debbuger

const calcTempAmplitudeBug = function (t1, t2) {
  //how to concatenate 2 arrays?
  // search in google :v
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0; // BUG INTENTIONAL
  let min = 0; // BUG INTENTIONAL
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") {
      continue;
    }
    //debugger;
    curTemp > max ? (max = curTemp) : (max = max);
    curTemp < min ? (min = curTemp) : (min = min);
  }
  //IDENTIFY -- se ve que el min nomes correcto
  console.log(`Max: ${max} Min: ${min}`);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
