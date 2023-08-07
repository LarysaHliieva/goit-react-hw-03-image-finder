import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

import * as API from 'services/api';

import styles from './App.module.css';
import Button from './Button/Button';

const perPage = 12;

export class App extends Component {
  state = {
    items: [],
    filter: '',
    loading: false,
    error: null,
    page: 1,
    residual: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { filter, page } = this.state;
    if ((filter && prevState.filter !== filter) || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { filter, page } = this.state;
    this.setState({ loading: true });
    try {
      const images = await API.searchImages(filter, page, perPage);
      this.setState(state => ({
        items: [...state.items, ...images.hits],
        residual: images.total - page * perPage,
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  onSearch = ({ filter }) => {
    this.setState({ filter, items: [], page: 1, residual: 0 });
  };

  render() {
    const { items, loading, error, residual } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.onSearch} />
        {Boolean(items.length) && <ImageGallery items={items} />}
        {error && (
          <p className={styles.errorMassage}>
            😥 Something went wrong... Please, reload and try again!
          </p>
        )}
        <Loader visible={loading} />
        {residual > 0 && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}
