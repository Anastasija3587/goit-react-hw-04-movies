import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import * as API from '../../components/services/api';
import List from '../../components/HomePage/HomePage';
import styles from './SearchMovie.module.css';

class SearchMovie extends Component {
  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
    location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  };

  state = {
    value: '',
    items: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const qsSearch = qs.parse(location.search).query;
    if (qsSearch) {
      API.fetching(qsSearch).then(res => this.setState({ items: res.results }));
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `?query=${value}`,
    });
    API.fetching(value).then(res => this.setState({ items: res.results }));
    this.setState({ value: '' });
  };

  render() {
    const { value, items } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <input
            className={styles.input}
            type="text"
            value={value}
            placeholder="Enter movie name..."
            onChange={this.handleChange}
          />
          <button className={styles.btn} type="submit">
            Search
          </button>
        </form>
        {items.length > 0 && <List items={items} />}
      </>
    );
  }
}

export default SearchMovie;
