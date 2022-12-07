import { Img } from './Image.styles';
export const Image = ({ image }) => {
  const { id, largeImageURL, webformatURL, tags } = image;
  return <Img src={webformatURL} alt={tags} width="300" />;
};
