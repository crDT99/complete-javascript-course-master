'use strict';
// const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} Million people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[Object.keys(data.languages)[0]]
                }</p>
                <p class="country__row"><span>💰</span>${
                  // data.currencies[0].name; // not working :(
                  data.currencies[Object.keys(data.currencies)[0]].name
                }</p>
            </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////////////////////////////////////

// ES6 NEW WAY OF CONSUMING PROMISES
//fetch returns a promise
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res));
// is the same as :
//   const res = await fetch(
//     `https://restcountries.com/v3.1/name/${dataGeo.country}`
//   );

// looks like normal code, but all is asynchronous

// Asycn -> this makes the function keep running in the background while performing code inside
const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse geoCoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    // if (dataGeo.distance.indexOf('Throttled!'))
    //   throw new Error(
    //     `Woops, youre recharging it too fast, please wait a second `
    //   );
    if (dataGeo.prov === 'Throttled! See geocode.xyz/pricing')
      throw new Error(
        `Woops, youre recharging it too fast, please wait a second `
      );
    console.log(dataGeo);

    //COUNTRY DATA

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    const data = await res.json();
    // console.log(data[0]);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city},${dataGeo.country} `;
  } catch (err) {
    console.log(err);
    renderError(`Something went wrong 💥 ${err.message}`);

    // Manully Reject promise returned from async function whereAmI()
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city); => Promise {<pending>}

// READING THE RETURNING VALUE OF AN ASYNC FUNCTION
/*
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.log(`2: ${err.message} 💥`))
  //You are in Bogotá,Colombia
  .finally(() => console.log('3: Finished getting location'));

  */

// HANDLING ERRORS WITH TRY CATCH -> the catch get any error that may  occur in the block inside the try, this prevents the execution to stop

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

// IIFE => Immediately-Invoked Function
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`); //You are in Bogotá,Colombia
  } catch (error) {
    console.log(`2: ${error.message} 💥`);
  }
  console.log('3: Finished getting location');
})();
