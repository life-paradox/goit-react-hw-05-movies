import axios from 'axios';
import { API_KEY } from './apiKey';

const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFilms = query => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
};

export const getPopularFilms = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const getMovieDetails = filmId => {
  return axios.get(`${BASE_URL}/movie/${filmId}?api_key=${API_KEY}`);
};

export const getMovieCredits = filmId => {
  return axios.get(
    `${BASE_URL}/movie/${filmId}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export const getMovieReviews = filmId => {
  return axios.get(`${BASE_URL}/movie/${filmId}/reviews?api_key=${API_KEY}`);
};

export const getGenres = () => {
  return axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
};
