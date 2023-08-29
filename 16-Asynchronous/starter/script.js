'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// ---------------------------------------------------------
// old School Way to create AJAX

const getcountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  // request.open('GET','https://countries-api-836d.onrender.com/countries/colombia');
  request.send();
  console.log(request.responseText); // void
  // let data = request.send(); we cant do this because the result is not there YET, this makes the reuqest in background, and when its done, a LOAD EVENT will be triggered

  // we need to register a CallBack on the request object for the load event
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
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
  });
};

getcountryData('colombia');
getcountryData('canada');
getcountryData('argentina');
getcountryData('italy');
