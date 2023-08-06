import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import * as API from 'services/api';

export class App extends Component {
  state = {
    items: [],
    filter: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { filter } = this.state;

    try {
      const images = await API.searchImages(filter);
      this.setState({ items: images.hits });
    } catch (error) {
      console.log(error);
    }
  }

  onSearch = ({ filter }) => {
    this.setState({ filter });
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery items={items} />
      </>
    );
  }
}
