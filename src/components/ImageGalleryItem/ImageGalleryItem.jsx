export const ImageGalleryItem = ({ image }) => {
  const { id, largeImageURL, webformatURL, tags } = image;
  return <img src={webformatURL} alt={tags} width="300" />;
};
