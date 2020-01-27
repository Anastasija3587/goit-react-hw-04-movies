import React, { Component } from 'react';
import * as API from '../../components/services/api';
import HomePageList from '../../components/HomePage/HomePage';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    API.fetchingTrandingMovies().then(res => {
      this.setState({ items: res.results });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <h1 className={styles.title}>Trending Today</h1>
        <HomePageList items={items} />
      </>
    );
  }
}

export default HomePage;
