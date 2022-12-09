import PropTypes from 'prop-types';
import { Text } from './Notification.styles';

export const Notification = ({ msg }) => <Text>{msg}</Text>;

Notification.propTypes = {
  onSubmit: PropTypes.string.isRequired,
};
