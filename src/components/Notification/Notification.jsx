import PropTypes from 'prop-types';
import { Text } from './Notification.styles';

export const Notification = ({ msg }) => <Text>{msg}</Text>;

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
