import { useState, useEffect } from 'react';
import { fetchImagesByName } from './services/API';
import { GlobalStyles, AppBox } from './GlobalStyles';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PrimaryButton } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [notification, setNotification] = useState('Enter keyword');

  const showNotification = !gallery.length && !isLoading;
  const showButton = currentPage < totalPages;

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    fetchImagesByName(query, currentPage)
      .then(({ totalPages, hits }) => {
        if (!totalPages) {
          setNotification(
            `Your search "${query}" match nothing. Try a new keyword`
          );
          return;
        }
        setGallery(prev => [...prev, ...hits]);
        setTotalPages(totalPages);
      })
      .catch(error => {
        setNotification('Oops, something went wrong.');
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [query, currentPage]);

  const getQuery = newQuery => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setCurrentPage(1);
      setTotalPages(1);
      setGallery([]);
    }
  };

  const changePage = () => {
    setCurrentPage(prev => prev + 1);
  };
  const onImgClick = url => {
    setLargeImage(url);
  };
  const onModalClose = () => {
    setLargeImage('');
  };

  return (
    <AppBox>
      <GlobalStyles />
      <SearchBar onSubmit={getQuery} />
      {showNotification && <Notification msg={notification} />}
      <ImageGallery gallery={gallery} onClick={onImgClick} />
      {largeImage && (
        <Modal onClose={onModalClose}>
          <img src={largeImage} alt={query} width="600" />
        </Modal>
      )}
      {isLoading && <Loader />}
      {showButton && <PrimaryButton label="Load more" onClick={changePage} />}
    </AppBox>
  );
};
