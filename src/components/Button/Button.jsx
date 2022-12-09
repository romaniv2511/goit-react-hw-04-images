import PropTypes from 'prop-types';
import { Button } from './Button.styled';

export const PrimaryButton = ({ label, onClick }) => (
  <Button type="button" onClick={onClick}>
    {label}
  </Button>
);

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
