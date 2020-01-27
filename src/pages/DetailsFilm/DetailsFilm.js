import React, { Component, lazy, Suspense } from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../components/services/api';
import styles from './DetailsFilm.module.css';
import Loader from '../../components/Loader/Loader';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast-page" */),
);
const Review = lazy(() =>
  import(
    '../../components/Review/Review' /* webpackChunkName: "review-page" */
  ),
);

const activeStyle = {
  backgroundColor: 'white',
};

class DetailsFilm extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
    location: PropTypes.shape({ state: PropTypes.shape() }).isRequired,
  };

  state = {
    imgUrl: '',
    title: '',
    overview: '',
    vote: '',
    genres: [],
  };

  componentDidMount() {
    const { match } = this.props;
    API.fetchById(match.params.movieID).then(res =>
      this.setState({
        imgUrl: res.poster_path,
        title: res.title,
        overview: res.overview,
        vote: res.vote_average,
        genres: res.genres,
      }),
    );
  }

  goBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      history.push(location.state.from);
      return;
    }
    history.push('/');
  };

  render() {
    const { title, overview, vote, imgUrl, genres } = this.state;
    const { match, location } = this.props;
    return (
      <div className={styles.wrapper}>
        <button className={styles.btn} type="button" onClick={this.goBack}>
          <span>&#8617;</span>
          Go Back
        </button>
        <div className={styles.block}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w300/${imgUrl}`}
            alt=""
          />
          <div className={styles.content}>
            <h1>{title}</h1>
            <p>{vote * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <div>
              {genres.map(g => (
                <p key={g.id}>{g.name}</p>
              ))}
            </div>
          </div>
        </div>
        <ul className={styles.list}>
          <li>
            {location.state && location.state.from ? (
              <NavLink
                activeStyle={activeStyle}
                className={styles.link}
                onClick={this.toggle}
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: location.state.from },
                }}
              >
                Cast
              </NavLink>
            ) : (
              <NavLink
                activeStyle={activeStyle}
                className={styles.link}
                onClick={this.toggle}
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: location },
                }}
              >
                Cast
              </NavLink>
            )}
          </li>
          <li>
            {location.state && location.state.from ? (
              <NavLink
                activeStyle={activeStyle}
                className={styles.link}
                to={{
                  pathname: `${match.url}/review`,
                  state: { from: location.state.from },
                }}
              >
                Review
              </NavLink>
            ) : (
              <NavLink
                activeStyle={activeStyle}
                className={styles.link}
                to={{
                  pathname: `${match.url}/review`,
                  state: { from: location },
                }}
              >
                Review
              </NavLink>
            )}
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/review`} component={Review} />
        </Suspense>
      </div>
    );
  }
}

export default DetailsFilm;
