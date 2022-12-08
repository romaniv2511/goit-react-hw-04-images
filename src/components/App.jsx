import { Component } from 'react';
import { fetchImagesByName } from './services/API';
import { GlobalStyles } from './GlobalStyles';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PrimaryButton } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalPages: 1,
    gallery: [],
    isLoading: false,
    largeImage: null,
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
    console.log(this.state.largeImage);
    console.log(this.state.gallery);
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
  onImgClick = url => {
    this.setState(state => ({
      largeImage: url,
    }));
  };
  onModalClose = () => {
    this.setState({
      largeImage: '',
    });
  };

  render() {
    const { query, page, totalPages, gallery, isLoading, largeImage } =
      this.state;
    const isShowButton = page !== totalPages && gallery.length > 0;

    return (
      <div>
        <GlobalStyles />
        <SearchBar onSubmit={this.getQuery} />
        <ImageGallery gallery={gallery} onClick={this.onImgClick} />
        {largeImage && (
          <Modal onClose={this.onModalClose}>
            <img src={largeImage} alt={query} width="600" />
          </Modal>
        )}
        {isLoading && <Loader />}
        {isShowButton && (
          <PrimaryButton label="Load more" onClick={this.changePage} />
        )}
      </div>
    );
  }
}
