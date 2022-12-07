import { Component } from 'react';
import { fetchImagesByName } from './services/API';
import { GlobalStyles } from './GlobalStyles';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PrimaryButton } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalPages: 1,
    gallery: [],
    isLoading: false,
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  getQuery = query => {
    if (query !== this.state.query) {
      this.setState({ query, gallery: [] });
    }
  };
  getImages = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const { data } = await fetchImagesByName(query, page);
      this.setState(state => ({
        gallery: [...state.gallery, ...data.hits],
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  changePage = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    const { page, totalPages, isLoading } = this.state;
    const isShowButton = page !== totalPages;

    return (
      <div>
        <GlobalStyles />
        <SearchBar onSubmit={this.getQuery} />
        <ImageGallery gallery={this.state.gallery} />
        {isLoading && <Loader />}
        {isShowButton && (
          <PrimaryButton label="Load more" onClick={this.changePage} />
        )}
      </div>
    );
  }
}
