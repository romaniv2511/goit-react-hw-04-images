import { Button } from './Button.styled';

export const PrimaryButton = ({ label, onClick }) => (
  <Button type="button" onClick={onClick}>
    {label}
  </Button>
);
