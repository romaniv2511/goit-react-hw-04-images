import { Component } from 'react';
import { fetchImagesByName } from './services/API';
import { GlobalStyles, AppBox } from './GlobalStyles';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PrimaryButton } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalPages: 1,
    gallery: [],
    isLoading: false,
    largeImage: null,
    notification: 'Enter keyword',
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
      this.setState({ query, page: 1, gallery: [] });
    }
  };
  getImages = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const { data } = await fetchImagesByName(query, page);
      if (!data.total) {
        this.setState({
          notification: `Your search "${this.state.query}" match nothing. Try a new keyword`,
        });
        return;
      }
      this.setState(state => ({
        gallery: [...state.gallery, ...data.hits],
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({
        notification: 'Oops, something went wrong.',
      });
      console.log(error.message);
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
    const {
      query,
      page,
      totalPages,
      gallery,
      isLoading,
      largeImage,
      notification,
    } = this.state;
    const showButton = page !== totalPages && gallery.length > 0;

    return (
      <AppBox>
        <GlobalStyles />
        <SearchBar onSubmit={this.getQuery} />
        {!gallery.length && <Notification msg={notification} />}
        <ImageGallery gallery={gallery} onClick={this.onImgClick} />
        {largeImage && (
          <Modal onClose={this.onModalClose}>
            <img src={largeImage} alt={query} width="600" />
          </Modal>
        )}
        {isLoading && <Loader />}
        {showButton && (
          <PrimaryButton label="Load more" onClick={this.changePage} />
        )}
      </AppBox>
    );
  }
}
