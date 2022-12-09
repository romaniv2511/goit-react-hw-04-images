import PropTypes from 'prop-types';
import { Img } from './Image.styles';

export const Image = ({ url, alt }) => {
  return <Img src={url} alt={alt} />;
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
