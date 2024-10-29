import previewView from './previewView';
import View from './View';

class BookmarksView extends View {
  _errorMessage =
    'No bookmarks yet! You can find a nice recipe and bookmark it!';
  _parentElement = document.querySelector('.bookmarks__list');
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
