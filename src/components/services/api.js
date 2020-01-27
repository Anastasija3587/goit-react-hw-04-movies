import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchingTrandingMovies = () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=03639d1aa776aa5b9a3c84ebe36db88b',
    )
    .then(res => res.data);
};

export const fetching = query => {
  return axios
    .get(
      `search/movie?api_key=03639d1aa776aa5b9a3c84ebe36db88b&query=${query}&page=1`,
    )
    .then(res => res.data);
};

export const fetchById = id => {
  return axios
    .get(`movie/${id}?api_key=03639d1aa776aa5b9a3c84ebe36db88b`)
    .then(res => res.data);
};

export const fetchingCast = id => {
  return axios
    .get(`movie/${id}/credits?api_key=03639d1aa776aa5b9a3c84ebe36db88b`)
    .then(res => res.data);
};

export const fetchingReview = id => {
  return axios
    .get(`movie/${id}/reviews?api_key=03639d1aa776aa5b9a3c84ebe36db88b&page=1`)
    .then(res => res.data);
};
