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
