'use strict';

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

///////////////////////////////////////////////////

//~~~~~~~~~~~~~~ NO Combinator ~~~~~~~~~~~~~~
//this makes promises work one after another in sequence

const get3CountriesNormal = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`); // 1st
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`); // 2nd
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`); //3rd
    console.log(...data.map(d => d[0].capital));
  } catch (error) {
    console.log(error);
  }
};

//~~~~~~~~~~~~~~ Promise.all()~~~~~~~~~~~~~~
//to make the 3 together we use the promise.all combinator function its an stactic method that takes an array of promises and return a promise that run all the promises inside at the same time
//(shortcircuit if any promise is rejected)

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`), //1st
      getJSON(`https://restcountries.com/v3.1/name/${c2}`), //1st
      getJSON(`https://restcountries.com/v3.1/name/${c3}`), //1st
    ]);
    console.log(...data.map(d => d[0].capital));
  } catch (error) {
    console.log(error);
  }
};

get3Countries('colombia', 'canada', 'argentina');

//~~~~~~~~~~~~~~ Promise.race() ~~~~~~~~~~~~~~
// receives an array of promises and returns the 1rst promise to settle (even if rejected)

(async function () {
  const response = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/spain`),
    getJSON(`https://restcountries.com/v3.1/name/france`),
  ]);
  console.log(response[0]);
})();
//~~~~~~~~~~~~
//common use: promise race against a timeout to reject if last longer than a determined ammount of time

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(1.5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//~~~~~~~~~~~~~~ Promise.allSettled() ~~~~~~~~~~~~~~
// takes an array of promises,and return an array of all the settled promised (never shortcircuit)

Promise.allSettled([
  Promise.resolve('Success 1'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

//~~~~~~~~~~~~~~ Promise.any() [ES2021]~~~~~~~~~~~~~~
// takes and array of promises,and return the first fullfilled promise (Ignoring Rejected Promises)
Promise.any([
  Promise.resolve('Success 1'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res)); //Success 1
