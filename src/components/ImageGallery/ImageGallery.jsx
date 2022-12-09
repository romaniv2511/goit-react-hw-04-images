import PropTypes from 'prop-types';
import { Image } from '../Image/Image';
import { ImageGalleryList, ImageGalleryItem } from './ImageGallery.styles';

export const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ImageGalleryList>
      {!!gallery.length &&
        gallery.map(image => {
          const { id, largeImageURL, webformatURL, tags } = image;
          return (
            <ImageGalleryItem key={id} onClick={() => onClick(largeImageURL)}>
              <Image url={webformatURL} alt={tags} />
            </ImageGalleryItem>
          );
        })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
