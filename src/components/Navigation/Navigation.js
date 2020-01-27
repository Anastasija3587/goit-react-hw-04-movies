import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const activeStyle = {
  color: 'rgb(158, 131, 255)',
};

const Navigation = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.itemNav}>
        <NavLink
          exact
          activeStyle={activeStyle}
          to="/"
          className={styles.navLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.itemNav}>
        <NavLink
          activeStyle={activeStyle}
          to="/movies"
          className={styles.navLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
