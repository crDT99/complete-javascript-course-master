'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// ---------------------------------------------------------
// old School Way to create AJAX

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
//////////////////////////////////////////////////////
// ~~~~~~~~~~~~~~~ AJAX CALLS ~~~~~~~~~~~~~~~
const getcountryAndNeighbour = function (country) {
  //  -----  AJAX Call country Original -----
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  // Once the load event is fired when data arrives, the data is handled
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //-----  Render country Original -----

    renderCountry(data);

    // -----  Get neighbour country 1 -----
    const neighbour = data.borders?.[0];
    console.log(neighbour);

    //  -----  AJAX Call neighbour country 1 -----
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getcountryAndNeighbour('usa');
