import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Searchbar, SearchForm, Input, SearchButton } from './SearchBar.styles';
import { FiSearch } from 'react-icons/fi';

const SignupSchema = Yup.object().shape({
  searchValue: Yup.string().required('Please enter query'),
});

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ searchValue }, actions) => {
    onSubmit(searchValue.trim());
  };
  return (
    <Searchbar>
      <Formik
        initialValues={{ searchValue: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <SearchForm>
          <SearchButton type="submit">
            <FiSearch />
          </SearchButton>
          <Input
            name="searchValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Searchbar>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
