import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../services/api';
import styles from './Review.module.css';

class Review extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {
    review: [],
  };

  componentDidMount() {
    const { match } = this.props;
    API.fetchingReview(match.params.movieID).then(res =>
      this.setState({ review: res.results }),
    );
  }

  render() {
    const { review } = this.state;
    return (
      <ul className={styles.list}>
        {review.length > 0 ? (
          review.map(r => (
            <li key={r.id}>
              <h3>Author: {r.author}</h3>
              <p>{r.content}</p>
            </li>
          ))
        ) : (
          <li>We do not have any reviews for this movie.</li>
        )}
      </ul>
    );
  }
}

export default Review;
