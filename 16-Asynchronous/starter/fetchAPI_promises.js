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
  console.log(html);
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// ------------------------------------------------------
// old School Way to create AJAX

// const request = new XMLHttpRequest();
// request.open('GET', `link`);
// request.send();

// ------------------------------------------------------
// Modern Way (promises)
const request = fetch('https://restcountries.com/v3.1/name/colombia');
console.log(request); // return a Promise

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       // json()method avaliable in every response object that is comming from a fetch function
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

getCountryData('colombia');
