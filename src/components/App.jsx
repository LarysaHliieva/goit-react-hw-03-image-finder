import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    items: [],
  };

  onSearch = ({ filter }) => {
    console.log(filter);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery />
      </>
    );
  }
}
