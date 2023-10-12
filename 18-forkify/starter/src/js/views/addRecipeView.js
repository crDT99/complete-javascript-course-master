import View from './View.js';
import icons from 'url:../../img/icons.svg';

let data2;

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was succesfully uploaded =D ';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  keepValues = false;

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    // this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    // this._btnOpen.addEventListener('click', this._restoreForm);
    this._btnOpen.addEventListener('click', () => {
      this.toggleWindow();
      this._restoreForm();
    });
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    console.log(' ---- this is the PE', this);
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      //convert entries to objects
      const data = Object.fromEntries(dataArr);
      data2 = Object.assign({}, data);
      handler(data);
    });
  }
  _restoreForm() {
    console.log('Im restoring ... ');
    const markup = `
            <form class="upload">
            <div class="upload__column">
              <h3 class="upload__heading">Recipe data</h3>
              <label>Title</label>
              <input value="${
                this.keepValues ? data2.title : ''
              }" required name="title" type="text" />
              <label>URL</label>
              <input value="${
                this.keepValues ? data2.sourceUrl : ''
              }" required name="sourceUrl" type="text" />
              <label>Image URL</label>
              <input value="${
                this.keepValues ? data2.image : ''
              }" required name="image" type="text" />
              <label>Publisher</label>
              <input value="" required name="publisher" type="text" />
              <label>Prep time</label>
              <input value="${
                this.keepValues ? data2.cookingTime : ''
              }" required name="cookingTime" type="number" />
              <label>Servings</label>
              <input value="${
                this.keepValues ? data2.servings : ''
              }" required name="servings" type="number" />
            </div>

            <div class="upload__column">
              <h3 class="upload__heading">Ingredients</h3>
              <label>Ingredient 1</label>
              <input
                value="${this.keepValues ? data2['ingredient-1'] : ''}"
                type="text"
                required
                name="ingredient-1"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 2</label>
              <input
                value="${this.keepValues ? data2['ingredient-2'] : ''}"
                type="text"
                name="ingredient-2"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 3</label>
              <input
                value="${this.keepValues ? data2['ingredient-3'] : ''}"
                type="text"
                name="ingredient-3"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 4</label>
              <input
                value = "${this.keepValues ? data2['ingredient-4'] : ''}"
                type="text"
                name="ingredient-4"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 5</label>
              <input
                value = "${this.keepValues ? data2['ingredient-5'] : ''}"
                type="text"
                name="ingredient-5"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 6</label>
              <input
                value = "${this.keepValues ? data2['ingredient-6'] : ''}"
                type="text"
                name="ingredient-6"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
            </div>

            <button class="btn upload__btn">
              <svg>
                <use href="src/img/icons.svg#icon-upload-cloud"></use>
              </svg>
              <span>Upload</span>
            </button>
          </form>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this.keepValues = false;
  }
}

export default new AddRecipeView();
