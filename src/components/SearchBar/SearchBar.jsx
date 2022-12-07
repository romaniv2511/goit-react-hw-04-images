import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  searchValue: Yup.string().required('Enter query'),
});

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ searchValue }, actions) => {
    console.log(searchValue);
    onSubmit(searchValue);
  };
  return (
    <header>
      <Formik
        initialValues={{ searchValue: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <button type="submit">
            <span>Search</span>
          </button>
          <Field
            name="searchValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="searchValue" />
        </Form>
      </Formik>
    </header>
  );
};
