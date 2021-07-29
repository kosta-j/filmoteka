export default {
  API_KEY: 'api_key=05d7e6695d9ebeb510a995559544df94',
  BASE_URL: 'https://api.themoviedb.org/3/',
  searchForm: document.getElementById('search-form'),
  searchInput: document.getElementById('search-input'),
  searchButton: document.getElementById('search-btn'),
  sectionGenres: document.getElementById('genres'),
  genreButtons: document.querySelectorAll('.genre-btn'),
  clearGenresButton: document.getElementById('genre-clear'),
  movieContainer: document.querySelector('.movie-list'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  slider: document.getElementById('slider-list'),
  sliderSection: document.querySelector('.slider'),
  movieContainer: document.querySelector('.movie-list'),
  libraryButton: document.querySelector('.my-library-link'),
  logoLink: document.querySelector('.logo-link'),
  homeButton: document.querySelector('.home-link'),
  header: document.querySelector('.header'),
  watchedButton: document.querySelector('.watched-btn'),
  queueButton: document.querySelector('.queue-btn'),
  moviesGallery: document.querySelector('.movies'),
  modalFilmRenderField: document.querySelector('#film-template'),
  modalFilmBlackdrop: document.querySelector('.film-blackdrop'),
  bodyEl: document.querySelector('body'),
  buttonToTop: document.getElementById('btn-to-top'),
  watchedBtn: document.querySelector('.btn-add-to-watched'),
  queueBtn: document.querySelector('.btn-add-to-queue'),
  genresContainer: document.getElementById('genre-container'),
  chooseGenreButton: document.querySelector('.choose-button'),
  closeBtn: document.querySelector('[data-action = "close"]'),
  modalWindow: document.querySelector('.film-blackdrop'),
};
