'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//  Promisifying the Geolocation API
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

console.log('Getting Position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(resp => {
      if (!resp.ok)
        throw new Error(`Woops, there are some issues ${resp.status} `);
      return resp.json();
    })
    .then(data => {
      console.log(data);
      if (data.prov === 'Throttled! See geocode.xyz/pricing')
        throw new Error(
          `Woops, youre recharging it too fast, please wait a second `
        );

      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country} `);
    })
    .then(response => {
      console.log(response);
      if (!response.ok) throw new Error(`County not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.log(`${error.message} 💥💥`));
};

btn.addEventListener('click', whereAmI);
