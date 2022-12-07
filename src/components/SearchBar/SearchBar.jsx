export const SearchBar = ({ onSubmit }) => {
  let value = '';

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <header>
      <form onSubmit={onFormSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => {
            value = e.target.value.trim();
          }}
        />
      </form>
    </header>
  );
};
