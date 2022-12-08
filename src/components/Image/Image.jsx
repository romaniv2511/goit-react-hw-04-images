import { Img } from './Image.styles';
export const Image = ({ url, alt }) => {
  return <Img src={url} alt={alt} />;
};
