import { Component } from 'react';
import { fetchImagesByName } from './services/API';
import { GlobalStyles } from './GlobalStyles';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    gallery: [],
  };
  componentDidUpdate(_, prevState) {
    console.log(this.state);
    // console.log(prevState);
  }

  getImages = async value => {
    try {
      const { data } = await fetchImagesByName(value);
      this.setState({ gallery: data.hits });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <SearchBar onSubmit={this.getImages} />
        <ImageGallery gallery={this.state.gallery} />
      </>
    );
  }
}
