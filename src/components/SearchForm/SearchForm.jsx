import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, queryParam, onChange }) => {
  const submitHandler = event => {
    event.preventDefault();

    if (queryParam.length <= 0) {
      return;
    }

    onSubmit({ queryParam });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie by title"
        onChange={e => onChange(e.target.value)}
        value={queryParam}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  queryParam: PropTypes.string,
  onChange: PropTypes.func,
};
