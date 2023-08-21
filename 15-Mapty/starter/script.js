'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [latitude , longitude]
    this.distance = distance; //in km
    this.duration = duration; // in min
  }
  _setDescrition() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPase();
    this._setDescrition();
  }
  calcPase() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescrition();
  }
  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);

///////////////////////////////////////////////////////////////////////////
// Aplication Architecture

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 13;
  constructor() {
    // Get User's Position
    this._getPosition();

    // Get Data from Local Storage
    this._getLocalStorage();

    // Attach event Handlers
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);

    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`could not get your position`);
        }
      );
    }
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    // Array of coords
    const coords = [latitude, longitude];

    // the "L" is the namespace, so we can call the methods like L.map, L.tileLayer or L.marker

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    // console.log(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on Map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Clear inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    //hide the form
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    // We toogle the hidden class on both fields so they can alternate the hidden status
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    //function to see if EVERY one of the atribbutes passed are numbers
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    //function to see if EVERY one of the atribbutes passed are positive numbers
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();
    // Get Data From Form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If Workout is running, create running object

    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is Valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!! ❌');
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    // If Workout is cycling, create cycling object

    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      // Check if data is Valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!! ❌');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array

    this.#workouts.push(workout);

    // Render Workout on map as a marker

    this._renderWorkoutMarker(workout);

    // Render Workout on list

    this._renderWorkout(workout);

    // Hide form + Clear Imput Fields

    // Clear input fields
    this._hideForm();

    // Set Local Storage to all Workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(incWorkout) {
    // Display Marker
    L.marker(incWorkout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${incWorkout.type}-popup`,
        })
      )
      .setPopupContent(
        `${incWorkout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${
          incWorkout.description
        }`
      )
      .openPopup();
  }

  _renderWorkout(incWorkout) {
    let html = `
        <li class="workout workout--${incWorkout.type}" data-id="${
      incWorkout.id
    }">
          <h2 class="workout__title">${incWorkout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              incWorkout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${incWorkout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${incWorkout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
          `;

    if (incWorkout.type === 'running') {
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${incWorkout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${incWorkout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
    `;
    }

    if (incWorkout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${incWorkout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🚵</span>
          <span class="workout__value">${incWorkout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
    `;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id == workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    //using the public interface
    // workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}
const app = new App();
