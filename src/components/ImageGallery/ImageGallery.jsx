import { Image } from '../Image/Image';
import { ImageGalleryList, ImageGalleryItem } from './ImageGallery.styles';
export const ImageGallery = ({ gallery }) => {
  return (
    <ImageGalleryList>
      {!!gallery.length &&
        gallery.map(image => {
          const { id } = image;
          return (
            <ImageGalleryItem key={id}>
              <Image image={image} />
            </ImageGalleryItem>
          );
        })}
    </ImageGalleryList>
  );
};
