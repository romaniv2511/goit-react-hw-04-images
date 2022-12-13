import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Searchbar, Form, Input, SearchButton } from './SearchBar.styles';
import { FiSearch } from 'react-icons/fi';

const schema = Yup.object().shape({
  searchValue: Yup.string().required('Please enter query'),
});

export const SearchBar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSearchSubmit = ({ searchValue }) => {
    onSubmit(searchValue.trim());
  };
  return (
    <Searchbar>
      <Form onSubmit={handleSubmit(onSearchSubmit)}>
        <SearchButton type="submit">
          <FiSearch />
        </SearchButton>
        <Input
          {...register('searchValue')}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Searchbar>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
