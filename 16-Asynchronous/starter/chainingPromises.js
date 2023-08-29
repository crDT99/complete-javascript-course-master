'use strict';

const btn = document.querySelector('.btn-country');
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
  // countriesContainer.style.opacity = 1;
};

const rendeError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// ------------------------------------------------------
// old School Way to create AJAX

// const request = new XMLHttpRequest();
// request.open('GET', `link`);
// request.send();

// ------------------------------------------------------
// Modern Way (Promises)

// const request = fetch('https://restcountries.com/v3.1/name/colombia');
// console.log(request); // return a Promise

// chaining Promises -> FLAT CHAIN OF PROMISES

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    //any error message is added to the catch downside
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `County not found`)
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');
      // Country 2
      // what we return, is the fullfill value of the promise
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `County not found`
      );
    })
    .then(data => renderCountry(...data, 'neighbour'))
    .catch(err => {
      //this catches any errors that occur anywhere in the promise chain
      console.error(`${err} 💥💥💥`);
      rendeError(`Something Went Wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//then:  is called when the the promise is fullfilled
//catch: is called when the promise is rejected
//finally: its called no matter what

btn.addEventListener('click', function () {
  getCountryData('australia');
});

// getCountryData('asdadafaef');

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`link#1`)
//     .then(responseL1 => responseL1.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       // Country 2
//       // what we return, is the fullfill value of the promise
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(...data, 'neighbour');
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(...data, 'neighbour'));
// };
// getCountryData('colombia');

/// V2

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => {
//         console.log(response); //ok : false
//         if (!response.ok)
//           throw new Error(`County not found ${response.status}`);
//         //any error message is added to the catch downside
//         return response.json();
//       }
//       // err => alert(err) // catching the error
//     )
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;
//       // Country 2
//       // what we return, is the fullfill value of the promise
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`County not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(...data, 'neighbour'))
//     .catch(err => {
//       //this catches any errors that occur anywhere in the promise chain
//       console.error(`${err} 💥💥💥`);
//       rendeError(`Something Went Wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
