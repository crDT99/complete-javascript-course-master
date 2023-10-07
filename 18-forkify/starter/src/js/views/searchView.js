class searchView {
  #parentElement = document.querySelector('.search');
  //change .# for ._
  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearImput();
    return query;
  }

  #clearImput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault(); //prevents the page from reloadind
      handler();
    });
  }
}

export default new searchView();
