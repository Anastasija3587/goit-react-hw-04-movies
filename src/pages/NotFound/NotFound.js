import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <h1 style={{ textAlign: 'center' }}>
    Sorry, page not found
    <span role="img" aria-label="emoji">
      🤔
    </span>
    <Link to="/">Lets Home page!</Link>
  </h1>
);

export default NotFound;
