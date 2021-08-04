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
  watchedContainer: document.querySelector('.watched-list'),
  queueContainer: document.querySelector('.queue-list'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  slider: document.getElementById('slider-list'),
  sliderItem: document.querySelector('.glide__slide'),
  sliderSection: document.querySelector('.slider'),
  libraryButton: document.querySelector('.my-library-link'),
  logoLink: document.querySelector('.logo-link'),
  homeButton: document.querySelector('.home-link'),
  header: document.querySelector('.header'),
  watchedButton: document.querySelector('.watched-btn'),
  queueButton: document.querySelector('.queue-btn'),
  moviesGallery: document.querySelector('.movies'),
  modalFilmRenderField: document.querySelector('#film-template'),
  modalFilmBlackdrop: document.querySelector('.film-blackdrop'),
  filmModalField: document.querySelector('.film-modal'),
  bodyEl: document.querySelector('body'),
  buttonToTop: document.getElementById('btn-to-top'),
  footerCloseBtn: document.querySelector('#footerCloseBtn'),
  footerModalWindow: document.querySelector('#footer-modal'),
  linkGoIT: document.querySelector('.footer-text-goit-link'),
  watchedBtn: document.querySelector('.btn-add-to-watched'),
  queueBtn: document.querySelector('.btn-add-to-queue'),
  genresContainer: document.getElementById('genre-container'),
  chooseGenreButton: document.querySelector('.choose-button'),
  paginationContainer: document.querySelector('.pagination'),
  closeBtn: document.querySelector('[data-action = "close"]'),
  modalWindow: document.querySelector('.film-blackdrop'),
  watchedList: document.querySelector('.watched-list'),
  queueList: document.querySelector('.queue-list'),
};
