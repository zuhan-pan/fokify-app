import * as model from './model.js';
import recipeView from './views/recipeViews';
import searchView from './views/searchView';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    //results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // loading  recipe

    await model.loadRecipe(id);

    const { recipe } = model.state;

    //render recipe
    recipeView.render(model.state.recipe);

    //render bookmarks
    bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //load search results
    await model.loadSearchResults();

    //render search results
    resultsView.render(model.getSearchResultsPage());

    //reder the initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  //reder the new page
  //render new search results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //reder the new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update the recipe servings (in the state)
  model.updateServings(newServings);

  //render new recipe
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //update recipe view
  recipeView.update(model.state.recipe);

  //render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    recipeView.render(model.state.recipe);

    addRecipeView.renderMessage();

    bookmarksView.render(model.state.bookmarks);

    //change id in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back();
  } catch (err) {
    console.error(`${err} !!!!`);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  addRecipeView.addHandlerUpload(controlAddRecipe);

  const wideEvents = ['load', 'hashchange'];
  wideEvents.forEach(ev => window.addEventListener(ev, controlRecipes));
};

init();
