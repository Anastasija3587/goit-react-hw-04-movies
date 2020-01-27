import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const DetailsFilm = lazy(() =>
  import(
    '../pages/DetailsFilm/DetailsFilm' /* webpackChunkName: "details-page" */
  ),
);
const SearchMovie = lazy(() =>
  import(
    '../pages/SearchMovie/SearchMovie' /* webpackChunkName: "search-page" */
  ),
);
const NotFound = lazy(() =>
  import('../pages/NotFound/NotFound' /* webpackChunkName: "notfound-page" */),
);

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  DETAILS_MOVIE: {
    path: '/movies/:movieID',
    component: DetailsFilm,
  },
  SEARCH_MOVIE: {
    path: '/movies',
    component: SearchMovie,
  },
  NOT_FOUND: {
    component: NotFound,
  },
};
