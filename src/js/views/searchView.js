class SearchView {
  #parentEl = document.querySelector('.search');

  getQurey() {
    const qurey = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return qurey;
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
