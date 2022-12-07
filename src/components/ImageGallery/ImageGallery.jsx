import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  return (
    <ul>
      {!!gallery.length &&
        gallery.map(image => {
          const { id } = image;
          return (
            <li key={id}>
              <ImageGalleryItem image={image} />
            </li>
          );
        })}
    </ul>
  );
};
