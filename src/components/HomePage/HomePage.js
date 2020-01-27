import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';

const HomePage = ({ items = [], location }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <Link
            to={{
              pathname: `/movies/${item.id}`,
              state: { from: location },
            }}
            className={styles.itemsFilm}
          >
            <span>&#10001;</span>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

HomePage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  location: PropTypes.shape({ state: PropTypes.shape() }).isRequired,
};

export default withRouter(HomePage);
