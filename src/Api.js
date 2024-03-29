// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = "https://api.themoviedb.org/3/";

const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY2)
// Tranding Movies and TvShow
export const MEDIA_TYPE = {
  ALL: "all",
  MOVIE: "movie",
  TV: "tv",
  PERSON: "person",
};
export const TIME_WINDIW = {
  DAY: "day",
  WEEK: "week",
};
export const TRENDING_MOVIES = `${API_URL}trending/${MEDIA_TYPE.MOVIE}/${TIME_WINDIW.DAY}?api_key=${API_KEY}&language=en-US&page=`;
export const TRENDING_TVSHOW = `${API_URL}trending/${MEDIA_TYPE.TV}/${TIME_WINDIW.DAY}?api_key=${API_KEY}&language=en-US&page=`;
//Latest Movies
const LATEST_MOVIES = `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US&page=`;
//Upcoming Movies
export const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=`;
const Upcoming_Movies = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=`;
const SEARCH_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=`;

export const LATEST_TV = `${API_URL}tv/latest?api_key=${API_KEY}&language=en-US&page=`;
export const Upcoming_TvShow = `${API_URL}tv/upcoming?api_key=${API_KEY}&language=en-US&page=`;
export const POPULAR_BASE_URL_Tv = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=`;

// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;

const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/w154";
export const IMAGE_BASE_URL_CARD = "https://image.tmdb.org/t/p/w500";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";
const CARD_SIZE = "w500";
const VIDEO_PALY = `https://www.themoviedb.org/video/play?key=`;

//-------------- Config for TvShow --------------------
const POPULAR_TVSHOW = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=`;

export {
  POPULAR_TVSHOW,
  VIDEO_PALY,
  LATEST_MOVIES,
  CARD_SIZE,
  Upcoming_Movies,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
};
