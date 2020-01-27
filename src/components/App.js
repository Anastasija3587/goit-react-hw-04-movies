import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import routes from '../routes/routes';
import Loader from './Loader/Loader';

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path={routes.HOME_PAGE.path}
            exact
            component={routes.HOME_PAGE.component}
          />
          <Route
            path={routes.DETAILS_MOVIE.path}
            component={routes.DETAILS_MOVIE.component}
          />
          <Route
            path={routes.SEARCH_MOVIE.path}
            component={routes.SEARCH_MOVIE.component}
          />
          <Route component={routes.NOT_FOUND.component} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
